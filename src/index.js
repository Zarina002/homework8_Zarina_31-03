import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from "./Navbar";
import Section from "./Section";
import Footer from "./Footer";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Section />
    <Footer />
  </React.StrictMode>
);