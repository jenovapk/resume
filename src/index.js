import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Resume from './components/Resume';
import reportWebVitals from './reportWebVitals';
import './assets/css/Header.css';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Resume />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
