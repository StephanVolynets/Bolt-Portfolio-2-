import React from 'react';

interface FooterProps {
  theme: string;
}

const Footer: React.FC<FooterProps> = ({ theme }) => {
  return (
    <footer className={`${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-800 text-white'} py-8`}>
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Stephan Volynets. All rights reserved.</p>
        <p className="mt-2">Computer Science & Data Science Student at Cornell University</p>
      </div>
    </footer>
  );
};

export default Footer;