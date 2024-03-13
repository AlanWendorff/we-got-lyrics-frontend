import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/globals.scss';
import 'react-loading-skeleton/dist/skeleton.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// agregar aspect ratio a todas las imagenes
// revisar si los botones tienen aria-label
// mejorar skeletons para mobile
// Devolver todas las canciones de un artista

// El share en mobile se ve desalineado.

// Fixear aliases en core

// modelo = lo que tiene mi negocio
// cada funcionalidad es un hexagono

// Si el proyecto apunta a ser demo de patrones tengo que documentar (agregar comments) para detallar que es lo que se está probando en X lugar.
