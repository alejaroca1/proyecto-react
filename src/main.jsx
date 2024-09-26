import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { BrowserRouter } from 'react-router-dom'

const firebaseConfig = {
  apiKey: "AIzaSyDdKUaBgtt8JmHeGvyY-KXSLlYJZKeaCn0",
  authDomain: "coderhouse-ecommerce-484ed.firebaseapp.com",
  projectId: "coderhouse-ecommerce-484ed",
  storageBucket: "coderhouse-ecommerce-484ed.appspot.com",
  messagingSenderId: "210554062463",
  appId: "1:210554062463:web:35cbe7870f77925684e14a"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

const root = ReactDOM.createRoot(document.getElementById('root'));  // Usa createRoot en vez de render

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);