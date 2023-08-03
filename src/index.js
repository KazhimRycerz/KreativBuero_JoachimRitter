import React from 'react';
import ReactDOM from 'react-dom/client';
import { SectionsProvider } from "./context/SectionsContext.js";
import './index.scss';
import App from './App.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SectionsProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </SectionsProvider>
);


