import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-7 px-4 flex flex-col items-center gap-5">
      <div className="text-center flex flex-col items-center max-w-4xl">
        <h2 className="text-2xl font-bold py-2 text-gray-300">Zenith Webzone</h2>
        <p className="text-center text-gray-300">
          Enjoy a collection of classic board games — from strategy to casual fun.
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-center items-center flex-wrap gap-2">
        <span className="text-sm">Visit my tools website:</span>
        <a 
          href="https://zenithwebzone.com/" 
          className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm underline"
          aria-label="Visit Zenith Webzone tools website"
          rel="noopener noreferrer"
        >
          https://www.zenithwebzone.com
        </a>
      </div>
      
      <div className="border-t border-gray-600 flex flex-col sm:flex-row justify-center items-center gap-1 w-full max-w-4xl text-center p-4 text-gray-300">
        <span>© 2025 Zenith Webzone</span>
        <span className="hidden sm:block">-</span>
        <span>All content is for fun and entertainment only.</span>
      </div>
    </footer>
  );
};

export default React.memo(Footer);