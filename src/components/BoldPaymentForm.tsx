
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Separator } from '@/components/ui/separator';
import { Phone, CreditCard, Loader, CircleCheck, AlertCircle } from 'lucide-react';
import { getPaymentMethods, getTerminals, createPayment } from '@/services/boldPaymentService';

interface BoldPaymentFormProps {
  product: any;
  isProcessing: boolean;
  setIsProcessing: (isProcessing: boolean) => void;
}

interface PaymentMethod {
  name: string;
  enabled: boolean;
}

interface Terminal {
  terminal_model: string;
  terminal_serial: string;
  status: string;
  name: string;
}

const BoldPaymentForm = ({ product, isProcessing, setIsProcessing }: BoldPaymentFormProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
  const [terminals, setTerminals] = useState<Terminal[]>([]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('');
  const [selectedTerminal, setSelectedTerminal] = useState<Terminal | null>(null);
  const [customerInfo, setCustomerInfo] = useState({
    email: '',
    phone: '',
    documentType: 'CEDULA',
    documentNumber: ''
  });
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');
  const [integrationId, setIntegrationId] = useState<string | null>(null);

  // Fetch payment methods and terminals on component mount
  useEffect(() => {
    const fetchPaymentData = async () => {
      try {
        const methods = await getPaymentMethods();
        setPaymentMethods(methods);
        
        const terminalList = await getTerminals();
        setTerminals(terminalList);
        if (terminalList.length > 0) {
          setSelectedTerminal(terminalList[0]);
        }
      } catch (error) {
        console.error('Error fetching payment data:', error);
        toast({
          title: "Error de conexión",
          description: "No se pudo conectar con la pasarela de pagos. Inténtelo de nuevo más tarde.",
          variant: "destructive"
        });
      }
    };
    
    fetchPaymentData();
  }, [toast]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({ ...prev, [name]: value }));
  };

  const handlePaymentMethodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPaymentMethod(e.target.value);
  };

  const handleTerminalChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = terminals.find(term => term.terminal_serial === e.target.value) || null;
    setSelectedTerminal(selected);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedTerminal) {
      toast({
        title: "Error",
        description: "Por favor seleccione un terminal para procesar el pago",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);
    setPaymentStatus('processing');
    
    try {
      // Prepare payment data
      const paymentData = {
        amount: {
          currency: "COP",
          taxes: [
            {
              type: "VAT",
              value: 0  // For demonstration, assuming no tax is applied
            }
          ],
          tip_amount: 0,
          total_amount: parseFloat(product.price.replace(/[^0-9]/g, '')) || 100000 // Default amount if price parsing fails
        },
        payment_method: selectedPaymentMethod || "POS",
        terminal_model: selectedTerminal.terminal_model,
        terminal_serial: selectedTerminal.terminal_serial,
        reference: "order-" + Date.now(),
        user_email: "vendedor@subadatos.com", // This should be the vendor email
        description: `Compra de ${product.name}`,
        payer: {
          email: customerInfo.email,
          phone_number: customerInfo.phone,
          document: {
            document_type: customerInfo.documentType,
            document_number: customerInfo.documentNumber
          }
        }
      };
      
      const response = await createPayment(paymentData);
      
      if (response && response.integration_id) {
        setIntegrationId(response.integration_id);
        setPaymentStatus('success');
        
        toast({
          title: "Pago iniciado",
          description: "La solicitud de pago ha sido enviada al datáfono. Por favor complete el proceso en el dispositivo.",
        });
        
        // In a real implementation, you would listen for webhook notifications
        // For demo purposes, we'll just show success after a delay
        setTimeout(() => {
          navigate('/pago-exitoso', { 
            state: { 
              product,
              integrationId: response.integration_id
            } 
          });
        }, 5000);
      }
    } catch (error) {
      console.error('Payment error:', error);
      setPaymentStatus('error');
      
      toast({
        title: "Error en el pago",
        description: "Ocurrió un error al procesar su pago. Por favor intente nuevamente.",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Información de pago</CardTitle>
        <CardDescription>
          Complete los datos para realizar su pago a través de Bold
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Customer Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Información del cliente</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  value={customerInfo.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input 
                  id="phone" 
                  name="phone" 
                  type="tel" 
                  value={customerInfo.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="documentType">Tipo de documento</Label>
                <select
                  id="documentType"
                  name="documentType"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  value={customerInfo.documentType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="CEDULA">Cédula de Ciudadanía</option>
                  <option value="NIT">NIT</option>
                  <option value="CEDULA_EXTRANJERIA">Cédula de Extranjería</option>
                  <option value="PASAPORTE">Pasaporte</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="documentNumber">Número de documento</Label>
                <Input 
                  id="documentNumber" 
                  name="documentNumber" 
                  type="text" 
                  value={customerInfo.documentNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>
          
          <Separator />
          
          {/* Payment Method Selection */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Método de pago</h3>
            
            {paymentMethods.length > 0 ? (
              <div className="space-y-2">
                <Label htmlFor="paymentMethod">Seleccione un método de pago</Label>
                <select
                  id="paymentMethod"
                  name="paymentMethod"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  value={selectedPaymentMethod}
                  onChange={handlePaymentMethodChange}
                  required
                >
                  <option value="">Seleccione un método de pago</option>
                  {paymentMethods
                    .filter(method => method.enabled)
                    .map(method => (
                      <option key={method.name} value={method.name}>
                        {method.name === 'POS' ? 'Tarjeta débito/crédito' :
                         method.name === 'NEQUI' ? 'Nequi' :
                         method.name === 'DAVIPLATA' ? 'Daviplata' :
                         method.name === 'PAY_BY_LINK' ? 'Link de pago' : method.name}
                      </option>
                    ))}
                </select>
              </div>
            ) : (
              <p className="text-yellow-600">
                Cargando métodos de pago disponibles...
              </p>
            )}
            
            {terminals.length > 0 ? (
              <div className="space-y-2">
                <Label htmlFor="terminal">Seleccione un datáfono</Label>
                <select
                  id="terminal"
                  name="terminal"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  value={selectedTerminal?.terminal_serial || ""}
                  onChange={handleTerminalChange}
                  required
                >
                  {terminals.map(terminal => (
                    <option key={terminal.terminal_serial} value={terminal.terminal_serial}>
                      {terminal.name} - {terminal.terminal_serial}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <p className="text-yellow-600">
                No hay datáfonos disponibles. Asegúrese de tener un datáfono SmartPro vinculado a su cuenta Bold.
              </p>
            )}
          </div>
        
          <div className="pt-4">
            <Button 
              type="submit" 
              className="w-full bg-nature-600 hover:bg-nature-700"
              disabled={isProcessing || terminals.length === 0}
            >
              {paymentStatus === 'processing' ? (
                <Loader className="mr-2 h-4 w-4 animate-spin" />
              ) : paymentStatus === 'success' ? (
                <CircleCheck className="mr-2 h-4 w-4" />
              ) : paymentStatus === 'error' ? (
                <AlertCircle className="mr-2 h-4 w-4" />
              ) : (
                <CreditCard className="mr-2 h-4 w-4" />
              )}
              {paymentStatus === 'processing' ? 'Procesando pago...' :
               paymentStatus === 'success' ? 'Pago iniciado' :
               paymentStatus === 'error' ? 'Error en el pago' : 'Pagar ahora'}
            </Button>
          </div>
        </form>
      </CardContent>
      
      <CardFooter className="flex flex-col space-y-2">
        <p className="text-sm text-gray-500">
          Pagos procesados de forma segura por Bold
        </p>
        <div className="flex justify-center">
          <img 
            src="https://bold.co/wp-content/uploads/2023/06/Logo_Bold_Color_B.png" 
            alt="Bold" 
            className="h-6"
          />
        </div>
      </CardFooter>
    </Card>
  );
};

export default BoldPaymentForm;
