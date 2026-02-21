import React, { useState, useEffect, MouseEvent } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  

  const phoneNumber = '254716394036';
  const message = encodeURIComponent("Hi Boniface, I saw your portfolio and would like to connect.");
  
  // Direct WhatsApp URL
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 hover:shadow-xl group"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} className="text-white" />
      
    </a>
  );
};

export default WhatsAppFloat;