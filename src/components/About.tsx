import React from 'react';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';

interface AboutProps {
  theme: string;
}

const About: React.FC<AboutProps> = ({ theme }) => {
  return (
    <section id="about" className={`py-24 section-fade ${theme === 'dark' ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'}`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-5xl font-bold mb-12 text-center ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>About Me</h2>
        <div className="max-w-4xl mx-auto">
          <RoughNotationGroup show={true}>
            <p className="text-xl mb-8 leading-relaxed">
              As a <RoughNotation type="highlight" color={theme === 'dark' ? '#4B5563' : '#FFD700'} animationDelay={300} strokeWidth={3}>Bachelor of Arts candidate</RoughNotation> at Cornell University specializing in Computer and Information Sciences, I'm currently applying my expertise in Python and front-end development at the <RoughNotation type="underline" color={theme === 'dark' ? '#4CAF50' : '#2E7D32'} animationDelay={600} strokeWidth={3}>Cornell Blockchain consulting team</RoughNotation>. My academic journey has been complemented by practical experience, where I've honed my skills in React.js and collaborative software development.
            </p>
            <p className="text-xl mb-8 leading-relaxed">
              At Cornell Blockchain, our team strives to <RoughNotation type="circle" color={theme === 'dark' ? '#FF6347' : '#FF4500'} animationDelay={900} strokeWidth={3}>innovate within the blockchain ecosystem</RoughNotation>, translating academic excellence into real-world applications. My dedication to the field is matched by a commitment to foster technology that empowers and advances our collective understanding.
            </p>
            <p className="text-xl leading-relaxed">
              Fluent in <RoughNotation type="box" color={theme === 'dark' ? '#4682B4' : '#1E90FF'} animationDelay={1200} strokeWidth={3}>English and Russian</RoughNotation>, I bring a global perspective to our endeavors, ensuring our solutions are inclusive and impactful.
            </p>
          </RoughNotationGroup>
        </div>
      </div>
    </section>
  );
};

export default About;