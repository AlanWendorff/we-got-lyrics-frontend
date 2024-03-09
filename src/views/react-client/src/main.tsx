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

// arreglar searchbar & searched list
// arreglar scroll del contenido en desktop
// mejorar web screenshot PWA
// Devolver todas las canciones de un artista
// Eliminar toolbar del All songs del artista
// El share en mobile se ve desalineado.
// Seguir corrigiendo el text overflow en mobile
// Corregir iconos, que tal vez sean mas simples sin tanto outline
