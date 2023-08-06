import React from 'react';
import ReactDOM from 'react-dom/client';
import  App from 'components/App/App.jsx';
import './index.css';
// import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <BrowserRouter basename="/goit-react-hw-06-phonebook">
    <StrictMode>
      <App />
    </StrictMode>
  // </BrowserRouter>
);
