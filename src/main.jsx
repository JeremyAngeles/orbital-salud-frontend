import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // ¡Crucial para que cargue Tailwind!

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);