import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC9s-4kRH12bkL2-YQ3YFeubq3y7UGr_5A",
  authDomain: "react-blog-application-2d94b.firebaseapp.com",
  projectId: "react-blog-application-2d94b",
  storageBucket: "react-blog-application-2d94b.appspot.com",
  messagingSenderId: "39424009688",
  appId: "1:39424009688:web:fbbd333e20ae0ae302bead"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
