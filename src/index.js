import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from '../src/reportWebVitals';
// import App from "./App";
// import * as serviceWorker from "./serviceWorker";
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import Users from './pages/Users';

const rootNode = document.getElementById('root');

// 원래는 <App />이어야 함.
ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <HomePage />
    <Users/>
    <UserPage />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
