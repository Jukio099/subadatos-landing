import { useEffect } from 'react';

const STREAMLIT_URL = 'https://subadatos-centralganadera.streamlit.app';

const Dashboard = () => {
  useEffect(() => {
    // Página de redirección — no debe indexarse
    const metaRobots = document.createElement('meta');
    metaRobots.name = 'robots';
    metaRobots.content = 'noindex, follow';
    metaRobots.setAttribute('data-page', 'dashboard');
    document.head.appendChild(metaRobots);

    window.location.replace(STREAMLIT_URL);

    return () => {
      const tag = document.querySelector('meta[data-page="dashboard"]');
      if (tag) document.head.removeChild(tag);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <p className="text-gray-500 text-lg">Redirigiendo a Consulta de Precios…</p>
        <a
          href={STREAMLIT_URL}
          className="mt-4 inline-block text-nature-600 underline text-sm"
        >
          Haz clic aquí si no eres redirigido automáticamente
        </a>
      </div>
    </div>
  );
};

export default Dashboard;
