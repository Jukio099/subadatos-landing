import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Show a simple message if JS is loaded but React fails
try {
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    document.body.innerHTML = '<div style="color:white;background:#0a0a0f;padding:40px;text-align:center"><h1>Error: No se encontró el elemento root</h1></div>';
  } else {
    const root = createRoot(rootElement);
    root.render(<App />);
  }
} catch (e) {
  document.body.innerHTML = `<div style="color:white;background:#0a0a0f;padding:40px;text-align:center;font-family:sans-serif">
    <h1 style="color:#a855f7">Subadatos</h1>
    <p style="color:#aaa">Error al cargar: ${e instanceof Error ? e.message : 'Error desconocido'}</p>
    <pre style="color:#f59e0b;font-size:12px;margin-top:20px;text-align:left;max-width:600px;margin:20px auto">${e instanceof Error ? e.stack : ''}</pre>
  </div>`;
}
