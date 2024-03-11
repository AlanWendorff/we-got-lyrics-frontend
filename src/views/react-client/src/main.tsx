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
// Corregir iconos, que tal vez sean mas simples sin tanto outline y que sean de mas res

// Fixear aliases en core
// dentro de useFavourite.ts estoy accediendo al local storage, es decir me paso por el culo mi logica de negocio

// modelo = lo que tiene mi negocio
// cada funcionalidad es un hexagono

// Si el proyecto apunta a ser demo de patrones tengo que documentar (agregar comments) para detallar que es lo que se está probando en X lugar.
