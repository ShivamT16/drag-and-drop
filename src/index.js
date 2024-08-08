import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MainContext, MainProvider } from './Components/MainContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

export {MainContext}

root.render(
  <React.StrictMode>
    <MainProvider>
    <App />
    </MainProvider>
  </React.StrictMode>
);
