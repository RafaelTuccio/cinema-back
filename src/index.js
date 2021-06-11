import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CinemaProvider } from './Context/useCinema';
import { FilmeProvider } from './Context/useFilme';
import { SessaoProvider } from './Context/useSessao';

ReactDOM.render(
  <CinemaProvider >
    <SessaoProvider>
      <FilmeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FilmeProvider>
    </SessaoProvider>
  </CinemaProvider>,
  document.getElementById('root')
);

