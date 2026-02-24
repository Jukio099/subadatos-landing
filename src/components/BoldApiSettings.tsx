
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Separator } from '@/components/ui/separator';
import { Key } from 'lucide-react';

const BoldApiSettings = () => {
  const { toast } = useToast();
  const [apiKey, setApiKey] = useState('');
  const [savedApiKey, setSavedApiKey] = useState<string | null>(null);
  const [apiEnvironment, setApiEnvironment] = useState('production');
  
  // Load saved API key from localStorage on component mount
  useEffect(() => {
    const storedApiKey = localStorage.getItem('boldApiKey');
    const storedEnvironment = localStorage.getItem('boldApiEnvironment');
    
    if (storedApiKey) {
      setSavedApiKey(storedApiKey);
      setApiKey(storedApiKey);
    }
    
    if (storedEnvironment) {
      setApiEnvironment(storedEnvironment);
    }
  }, []);
  
  const handleSaveApiKey = () => {
    if (apiKey.trim()) {
      localStorage.setItem('boldApiKey', apiKey);
      localStorage.setItem('boldApiEnvironment', apiEnvironment);
      setSavedApiKey(apiKey);
      
      toast({
        title: "Configuración guardada",
        description: "La clave de API de Bold se ha guardado correctamente.",
      });
    } else {
      toast({
        title: "Error",
        description: "Por favor ingrese una clave de API válida",
        variant: "destructive"
      });
    }
  };
  
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Key className="mr-2 h-5 w-5" />
          Configuración de API Bold
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="apiKey">Clave de API (API Key)</Label>
            <Input 
              id="apiKey" 
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Ingrese su clave de API Bold"
              type="password"
              className="font-mono"
            />
            <p className="text-xs text-gray-500 mt-1">
              Esta clave se almacenará localmente en su navegador.
            </p>
          </div>
          
          <Separator />
          
          <div>
            <Label htmlFor="environment">Ambiente</Label>
            <select
              id="environment"
              value={apiEnvironment}
              onChange={(e) => setApiEnvironment(e.target.value)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            >
              <option value="production">Producción</option>
              <option value="testing">Pruebas</option>
            </select>
            <p className="text-xs text-gray-500 mt-1">
              Seleccione "Pruebas" para usar el ambiente de desarrollo de Bold.
            </p>
          </div>
          
          {savedApiKey && (
            <div className="bg-green-50 p-3 rounded-md border border-green-200">
              <p className="text-green-700 text-sm">
                ✓ Clave de API configurada
              </p>
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter>
        <Button 
          onClick={handleSaveApiKey}
          className="w-full bg-nature-600 hover:bg-nature-700"
        >
          Guardar configuración
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BoldApiSettings;
