import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MainContext, MainProvider } from './Components/MainContext';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

export {MainContext}

root.render(
  <React.StrictMode>
   <Router> 
    <MainProvider>
     <App />
    </MainProvider>
   </Router> 
  </React.StrictMode>
);
