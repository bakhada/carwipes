
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top coordinate to 0, make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={`fixed bottom-8 right-8 z-[60] transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'}`}>
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="bg-teal-600 text-white p-4 rounded-full shadow-2xl shadow-teal-600/40 hover:bg-teal-700 hover:scale-110 active:scale-95 transition-all group border-4 border-white/20 backdrop-blur-sm"
      >
        <ArrowUp className="w-6 h-6 animate-pulse group-hover:animate-none" />
      </button>
    </div>
  );
};

export default ScrollToTop;
