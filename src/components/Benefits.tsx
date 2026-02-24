
import React from 'react';
import { BadgeCheck, ArrowRight, CheckSquare, Database, ChartBar, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Benefits = () => {
  const navigate = useNavigate();

  return (
    <section id="beneficios" className="section-padding relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-nature-100 rounded-full opacity-60 blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-earth-100 rounded-full opacity-60 blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="text-3xl font-bold mb-2 text-gradient">¿Por qué elegirnos?</h2>
          <div className="h-1 w-20 bg-nature-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600">
            En SUBADATOS ofrecemos beneficios únicos que nos distinguen en el mercado, 
            garantizando la satisfacción de nuestros clientes y el éxito de sus negocios.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Benefit 1 */}
          <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-nature-500 animate-on-scroll">
            <div className="bg-nature-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Database className="h-8 w-8 text-nature-600" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-nature-800">Análisis de Datos Avanzado</h3>
            <p className="text-gray-600 mb-4">
              Utilizamos técnicas avanzadas de análisis para extraer el máximo valor 
              de los datos de su empresa y transformarlos en decisiones estratégicas.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center gap-2 text-gray-700">
                <CheckSquare className="h-4 w-4 text-nature-600" />
                <span>Procesamiento inteligente</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckSquare className="h-4 w-4 text-nature-600" />
                <span>Visualización interactiva</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckSquare className="h-4 w-4 text-nature-600" />
                <span>Informes personalizados</span>
              </li>
            </ul>
            <Button
              onClick={() => navigate('/dashboard')}
              className="w-full bg-nature-600 hover:bg-nature-700 text-white flex items-center justify-center gap-2 mt-2"
            >
              Ver Dashboard
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Benefit 2 */}
          <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-nature-500 animate-on-scroll">
            <div className="bg-nature-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <ChartBar className="h-8 w-8 text-nature-600" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-nature-800">Asesoría Técnica Especializada</h3>
            <p className="text-gray-600 mb-4">
              Nuestro equipo de expertos le brinda asesoramiento personalizado 
              para maximizar el rendimiento de sus datos y optimizar sus operaciones.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center gap-2 text-gray-700">
                <CheckSquare className="h-4 w-4 text-nature-600" />
                <span>Consultoría estratégica</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckSquare className="h-4 w-4 text-nature-600" />
                <span>Implementación de soluciones</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckSquare className="h-4 w-4 text-nature-600" />
                <span>Seguimiento continuo</span>
              </li>
            </ul>
          </div>
          
          {/* Benefit 3 */}
          <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-nature-500 animate-on-scroll">
            <div className="bg-nature-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Leaf className="h-8 w-8 text-nature-600" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-nature-800">Productos Agropecuarios de Calidad</h3>
            <p className="text-gray-600 mb-4">
              Complementamos nuestros servicios con productos agropecuarios de primera 
              calidad adaptados a las necesidades específicas del sector.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center gap-2 text-gray-700">
                <CheckSquare className="h-4 w-4 text-nature-600" />
                <span>Semillas de alto rendimiento</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckSquare className="h-4 w-4 text-nature-600" />
                <span>Equipos de precisión</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckSquare className="h-4 w-4 text-nature-600" />
                <span>Adaptados al clima colombiano</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 bg-nature-50 p-8 rounded-lg border border-nature-100 animate-on-scroll">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h3 className="text-xl font-bold mb-2 text-nature-800">¿Listo para optimizar sus datos?</h3>
              <p className="text-gray-600">
                Contáctenos hoy mismo para recibir una asesoría personalizada y conocer todas nuestras soluciones
              </p>
            </div>
            <button 
              className="flex items-center bg-nature-600 hover:bg-nature-700 text-white py-3 px-6 rounded-lg transition-colors"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Solicitar Información
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
