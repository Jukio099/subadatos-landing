
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BoldApiSettings from '@/components/BoldApiSettings';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BoldSettings = () => {
  const navigate = useNavigate();
  
  const handleGoBack = () => {
    navigate(-1);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8 md:py-12 bg-gray-50">
        <div className="container-custom max-w-2xl mx-auto">
          <button 
            onClick={handleGoBack}
            className="inline-flex items-center mb-6 text-nature-600 hover:text-nature-800"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Volver
          </button>
          
          <h1 className="text-3xl font-bold mb-2">Configuración de Bold</h1>
          <p className="text-gray-600 mb-8">Configure su integración con Bold para procesar pagos</p>
          
          <div className="mb-8">
            <BoldApiSettings />
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Instrucciones</h2>
            
            <div className="space-y-4 text-gray-700">
              <p>
                Para configurar la integración de Bold en su sitio, necesitará:
              </p>
              
              <ol className="list-decimal pl-5 space-y-2">
                <li>Una cuenta Bold habilitada</li>
                <li>Al menos un datáfono SmartPro vinculado a su cuenta Bold</li>
                <li>El datáfono debe estar encendido y con la aplicación abierta o en modo background</li>
                <li>Tener su llave de API de Bold (puede obtenerla en panel.bold.co)</li>
              </ol>
              
              <p>
                Para obtener sus llaves de integración debe acceder a <a href="https://panel.bold.co" target="_blank" rel="noopener noreferrer" className="text-nature-600 hover:underline">panel.bold.co</a> e iniciar sesión con la cuenta con la que se registró el comercio.
              </p>
              
              <p>
                Una vez haya iniciado sesión deberá acceder a la sección <strong>Integraciones</strong> que encontrará en el menú lateral.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BoldSettings;
