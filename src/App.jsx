import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import Footer from './Components/Footer';
import Preloader from "./Components/Pre";
import ScrollToTop from "./Components/ScrollToTop";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./style.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });

    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App scroll-smooth" id={load ? "no-scroll" : "scroll"}>
        <div className="App min-h-screen bg-gray-900 text-white">
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
