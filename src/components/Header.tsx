import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? (theme === 'dark' ? 'bg-gray-800' : 'bg-white') : 'bg-transparent'} ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-600">SV</h1>
        <nav className="hidden md:flex space-x-8">
          {['about', 'skills', 'projects', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`nav-link text-lg font-semibold hover:text-blue-600 capitalize ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}
            >
              {item}
            </button>
          ))}
          <button 
            onClick={toggleTheme} 
            className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-800'} hover:bg-opacity-80 transition-colors`}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className={`md:hidden py-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
          {['about', 'skills', 'projects', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`block w-full py-3 px-6 text-left text-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 capitalize ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}
            >
              {item}
            </button>
          ))}
          <button 
            onClick={toggleTheme} 
            className={`block w-full py-3 px-6 text-left text-lg font-semibold ${theme === 'dark' ? 'text-yellow-300 hover:bg-gray-700' : 'text-gray-800 hover:bg-gray-100'}`}
          >
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;