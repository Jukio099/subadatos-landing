import { useEffect } from 'react';

const STREAMLIT_URL = 'https://subadatos-centralganadera.streamlit.app';

const Dashboard = () => {
  useEffect(() => {
    window.location.replace(STREAMLIT_URL);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <p className="text-gray-500 text-lg">Redirigiendo al dashboard…</p>
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
