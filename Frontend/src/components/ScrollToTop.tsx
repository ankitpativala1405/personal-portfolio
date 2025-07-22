import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 z-50 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
      } hover:scale-110`}
    >
      <ChevronUp size={24} />
    </button>
  );
};

export default ScrollToTop;