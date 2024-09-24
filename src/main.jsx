import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDdKUaBgtt8JmHeGvyY-KXSLlYJZKeaCn0",
  authDomain: "coderhouse-ecommerce-484ed.firebaseapp.com",
  projectId: "coderhouse-ecommerce-484ed",
  storageBucket: "coderhouse-ecommerce-484ed.appspot.com",
  messagingSenderId: "210554062463",
  appId: "1:210554062463:web:35cbe7870f77925684e14a"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
