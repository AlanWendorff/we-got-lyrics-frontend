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
//Fijarse a ver si puedo cambiar el tema de la web asi como cambio el titulo de la tab
// Fixear aliases en core

// modelo = lo que tiene mi negocio
// cada funcionalidad es un hexagono

// Si el proyecto apunta a ser demo de patrones tengo que documentar (agregar comments) para detallar que es lo que se está probando en X lugar.
