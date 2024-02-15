import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import rootReducer from "./reducer";
import {configureStore} from '@reduxjs/toolkit'
import { Toaster } from 'react-hot-toast';
import ToTop from './components/common/ToTop';

const store = configureStore({
  reducer:rootReducer,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ToTop/>
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
    </Provider> 
  </React.StrictMode>
);

