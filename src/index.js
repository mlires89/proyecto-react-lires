import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {CartContextProvider} from './store/CartContext';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC8nXDqeuXBmN2hF6DyJgY1c_8nc72_Djs",
  authDomain: "proyecto-react-lires.firebaseapp.com",
  projectId: "proyecto-react-lires",
  storageBucket: "proyecto-react-lires.appspot.com",
  messagingSenderId: "645592180186",
  appId: "1:645592180186:web:e6f7f1564729acd4d2cce3"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <CartContextProvider>
    <App />
    </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
