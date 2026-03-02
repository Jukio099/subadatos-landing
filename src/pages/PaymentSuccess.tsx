
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CircleCheck, Home, Phone } from 'lucide-react';

const PaymentSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product, integrationId } = location.state || {};

  useEffect(() => {
    if (!product) {
      navigate('/');
    }
  }, [product, navigate]);

  if (!product) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow py-12 md:py-20 bg-gray-50">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8 text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                <CircleCheck className="h-12 w-12 text-green-600" />
              </div>
            </div>

            <h1 className="text-3xl font-bold mb-4 text-green-600">
              ¡Pago Iniciado!
            </h1>

            <p className="text-lg mb-6">
              Su solicitud de pago por <strong>{product.name}</strong> ha sido enviada al datáfono Bold.
              Por favor complete el proceso en el dispositivo.
            </p>

            {integrationId && (
              <div className="bg-gray-50 p-4 rounded-md mb-8">
                <p className="text-sm text-gray-500">ID de referencia de la transacción:</p>
                <p className="font-mono text-gray-800 font-medium">{integrationId}</p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Button
                onClick={() => navigate('/')}
                className="bg-nature-600 hover:bg-nature-700"
              >
                <Home className="mr-2 h-4 w-4" />
                Volver al inicio
              </Button>

              <a
                href="https://wa.me/573144423197?text=Hola,%20acabo%20de%20realizar%20un%20pago%20en%20su%20sitio%20web.%20Mi%20referencia%20es:%20"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="border-nature-600 text-nature-600 hover:bg-nature-50">
                  <Phone className="mr-2 h-4 w-4" />
                  Contactar soporte
                </Button>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PaymentSuccess;
