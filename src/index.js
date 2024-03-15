import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Slider from "./Slider";
import "./styles.css";
import data from "./data";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 

  <>
    <App />
    <h1 >Featured Products</h1>
    <h3>Explore and discover a variety of products</h3>
    <div className="center">

      <Slider data={data} activeSlide={5} />

    </div>
  </>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
