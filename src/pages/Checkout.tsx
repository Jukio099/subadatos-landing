
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BoldPaymentForm from '@/components/BoldPaymentForm';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft } from 'lucide-react';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Get product info from location state
  const product = location.state?.product;
  
  if (!product) {
    // Redirect if no product is selected
    setTimeout(() => {
      navigate('/productos');
      toast({
        title: "Error",
        description: "Por favor seleccione un producto para continuar",
        variant: "destructive"
      });
    }, 100);
    
    return null;
  }
  
  const handleGoBack = () => {
    navigate(-1);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8 md:py-12 bg-gray-50">
        <div className="container-custom">
          <button 
            onClick={handleGoBack}
            className="inline-flex items-center mb-6 text-nature-600 hover:text-nature-800"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Volver
          </button>
          
          <h1 className="text-3xl font-bold mb-6">Finalizar Compra</h1>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Product Summary */}
            <div className="md:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4">Resumen del Pedido</h2>
                <div className="mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-40 object-cover rounded-md"
                  />
                </div>
                <h3 className="font-bold text-lg">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{product.description}</p>
                
                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between mb-2">
                    <span>Precio:</span>
                    <span className="font-semibold">{product.price}</span>
                  </div>
                  {/* We could add other costs here if needed */}
                  <div className="flex justify-between font-bold text-lg mt-4">
                    <span>Total:</span>
                    <span>{product.price}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Payment Form */}
            <div className="md:col-span-2">
              <BoldPaymentForm 
                product={product} 
                isProcessing={isProcessing}
                setIsProcessing={setIsProcessing}
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Checkout;
