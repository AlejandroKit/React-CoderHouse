import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyBbH4mWOgsTJnIrqv_CcTLiOtBsA9ugYi0',
    authDomain: 'react-app-coder-1831f.firebaseapp.com',
    projectId: 'react-app-coder-1831f',
    storageBucket: 'react-app-coder-1831f.appspot.com',
    messagingSenderId: '18643679252',
    appId: '1:18643679252:web:6bb0b811c1e39b53678f01',
};

const app = initializeApp(firebaseConfig);

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
