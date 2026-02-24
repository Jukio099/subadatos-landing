import React, { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Calendar, BarChart3, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Dashboard = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Dashboard - SUBADATOS';
    
    // Handle external iframe messaging if needed
    const handleMessage = (event: MessageEvent) => {
      if (event.origin === 'https://dashboard-oficial.onrender.com') {
        console.log('Message received from dashboard:', event.data);
      }
    };
    
    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <div className="min-h-screen pt-20 pb-10 bg-gray-50">
      <div className="container-custom max-w-7xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2 text-gradient">Panel de Control</h1>
          <p className="text-gray-600">Accede a todos nuestros datos y análisis</p>
        </div>

        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-nature-600 to-nature-500 rounded-lg mb-8 p-6 text-white shadow-lg animate-fade-in">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">¡Bienvenido a tu Dashboard Interactivo!</h2>
              <p className="mt-2 max-w-2xl">
                Explora todos los datos en tiempo real y obtén información valiosa para tu negocio.
                Nuestro panel interactivo te permite analizar tendencias y tomar decisiones basadas en datos.
              </p>
            </div>
            <div className="flex-shrink-0">
              <BarChart3 size={50} className="text-white/80" />
            </div>
          </div>
        </div>

        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full md:w-[400px] grid-cols-2 mx-auto mb-8">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="founder">Nuestro Fundador</TabsTrigger>
          </TabsList>
          
          <TabsContent value="dashboard" className="border rounded-lg bg-white shadow-md">
            {/* Dashboard Instructions */}
            <div className="p-4 bg-gray-50 border-b">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="default" className="bg-nature-600">Nuevo</Badge>
                <h3 className="font-medium">Cómo usar el dashboard:</h3>
              </div>
              <p className="text-sm text-gray-600">
                Interactúa con los gráficos haciendo clic en las diferentes secciones. 
                Puedes filtrar información usando los controles en la parte superior.
                Para más detalles, pasa el cursor sobre los elementos visuales.
              </p>
            </div>
            
            <div className="h-[calc(100vh-300px)] min-h-[500px]">
              <iframe 
                src="https://dashboard-oficial.onrender.com" 
                className="w-full h-full border-0"
                title="Dashboard Integrado"
                sandbox="allow-scripts allow-same-origin allow-forms"
              ></iframe>
            </div>
          </TabsContent>
          
          <TabsContent value="founder" className="border rounded-lg bg-white shadow-md p-6">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
                <Dialog>
                  <DialogTrigger asChild>
                    <Avatar className="h-48 w-48 border-4 border-nature-500 cursor-pointer hover:opacity-90 transition-opacity mx-auto">
                      <AvatarImage 
                        src="/lovable-uploads/8af72ab5-daeb-4500-92dc-a960ba32cb9f.png" 
                        alt="Julio César Rodríguez" 
                        className="object-cover"
                      />
                      <AvatarFallback className="text-4xl">JCR</AvatarFallback>
                    </Avatar>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <img
                      src="/lovable-uploads/8af72ab5-daeb-4500-92dc-a960ba32cb9f.png"
                      alt="Julio César Rodríguez"
                      className="w-full rounded-lg"
                    />
                  </DialogContent>
                </Dialog>
              </div>
              
              <div className="flex-grow text-center md:text-left">
                <h2 className="text-2xl font-bold text-nature-700 mb-2">Julio César Rodríguez</h2>
                <h3 className="text-lg font-semibold text-nature-600 mb-4">Fundador y Director Ejecutivo</h3>
                
                <div className="space-y-3">
                  <p className="text-gray-700 text-justify">
                    🎓 Economista graduado con honores de la Pontificia Universidad Javeriana, especializado en 
                    <strong> Inteligencia Artificial</strong> aplicada al análisis de datos empresariales.
                  </p>
                  <p className="text-gray-700 text-justify">
                    🚀 Pionero en <strong>análisis predictivo</strong> y <strong>machine learning</strong>, 
                    ha desarrollado sistemas innovadores para el sector 
                    <strong> agroindustrial</strong> en Latinoamérica, integrando ciencia y aplicaciones prácticas.
                  </p>
                  <p className="text-gray-700 text-justify">
                    💡 Fundador de <strong>SUBADATOS</strong>, ha transformado la toma de decisiones 
                    en el sector rural mediante <strong>IA y análisis de datos</strong>, estableciendo 
                    nuevos estándares para el desarrollo sostenible del agro.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    Economía
                  </span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    Inteligencia Artificial
                  </span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    Machine Learning
                  </span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    Análisis de Datos
                  </span>
                </div>
                
                <div className="mt-6">
                  <a 
                    href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1jukDDZEzrnmkKKAnSxB3Bn8iggOflE6zOEaj7FJ8bGhM2EBcj8XiPfO9xy3EEyIvELBJXORZZ?gv=true" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-nature-600 hover:bg-nature-700 text-white px-4 py-2 rounded-md transition-colors"
                  >
                    <Calendar className="mr-2 h-5 w-5" /> Agendar una consulta
                  </a>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
