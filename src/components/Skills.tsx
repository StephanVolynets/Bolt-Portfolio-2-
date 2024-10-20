import React from 'react';
import { Code, Database, Globe } from 'lucide-react';
import { RoughNotation } from 'react-rough-notation';

interface SkillsProps {
  theme: string;
}

const skills = [
  { category: 'Programming Languages', items: ['Python', 'JavaScript', 'TypeScript', 'Java'], icon: Code },
  { category: 'Web Technologies', items: ['React.js', 'HTML5', 'CSS3', 'Node.js'], icon: Globe },
  { category: 'Data Science', items: ['Machine Learning', 'Data Analysis', 'SQL', 'Pandas'], icon: Database },
];

const Skills: React.FC<SkillsProps> = ({ theme }) => {
  return (
    <section id="skills" className={`py-20 section-fade ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl font-bold mb-12 text-center ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
          <RoughNotation type="underline" color={theme === 'dark' ? '#FF6B6B' : '#FF4136'} show={true} strokeWidth={3}>
            My Toolkit
          </RoughNotation>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300`}>
              <div className="flex items-center mb-4">
                <skill.icon size={24} className={`${theme === 'dark' ? 'text-blue-400' : 'text-blue-500'} mr-2`} />
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              <ul className="list-disc list-inside">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;