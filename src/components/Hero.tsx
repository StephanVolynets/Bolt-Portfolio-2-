import React from 'react';
import { ArrowDown } from 'lucide-react';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';

interface HeroProps {
  theme: string;
}

const Hero: React.FC<HeroProps> = ({ theme }) => {
  return (
    <section className={`min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-blue-600 to-purple-700 ${theme === 'dark' ? 'text-gray-100' : 'text-white'} py-16`}>
      <div className="max-w-4xl mx-auto">
        <img
          src="https://example.com/path-to-your-image.jpg"
          alt="Stephan Volynets"
          className="w-48 h-48 rounded-full border-4 border-white shadow-lg mb-8 mx-auto"
        />
        <RoughNotationGroup show={true}>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <RoughNotation type="underline" color="#FFA500" strokeWidth={3} padding={2}>
              Stephan Volynets
            </RoughNotation>
          </h1>
          <p className="text-2xl md:text-3xl mb-10 max-w-3xl mx-auto">
            <RoughNotation type="bracket" brackets={['left', 'right']} color="#FF69B4" strokeWidth={3} padding={6}>
              Computer Science & Data Science Student
            </RoughNotation>{' '}
            at Cornell University
          </p>
        </RoughNotationGroup>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a href="#about" className="bg-white text-blue-600 hover:bg-blue-100 text-lg font-semibold py-3 px-6 rounded-full transition-colors duration-300">
            Discover My Journey
          </a>
          <a href="#contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg font-semibold py-3 px-6 rounded-full transition-colors duration-300">
            Let's Connect!
          </a>
        </div>
        <a
          href="#about"
          className="hover-effect animate-bounce inline-block"
          aria-label="Scroll to About section"
        >
          <ArrowDown size={36} className="text-white" />
        </a>
      </div>
    </section>
  );
};

export default Hero;