import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollTop';
import Header from './components/Header/Header';
import Home from './components/LandingPage/Home';
import Contact from './components/Contacts/Contact';
import WhatsAppFloat from './components/Whatsapp/WhtsApp';


const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('darkMode');
    if (stored !== null) setDarkMode(JSON.parse(stored));
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <Router>
      <div 
        className="relative transition-colors duration-300 min-h-screen"
        style={{ 
          backgroundColor: '#ffffff',  /* Clean white background */
          color: '#1e293b'              /* Slate text */
        }}
      >
        <Header/>
        <main className="relative z-10">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fix: Remove duplicate Home route */}
          </Routes>
        </main>
        
        {/* WhatsApp Floating Icon */}
        <WhatsAppFloat />
      </div>
    </Router>
  );
};

export default App;