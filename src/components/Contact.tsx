import React, { useState } from 'react';
import { Send, Linkedin, Github, Mail } from 'lucide-react';
import { RoughNotation } from 'react-rough-notation';

interface ContactProps {
  theme: string;
}

const Contact: React.FC<ContactProps> = ({ theme }) => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form submitted:', formState);
    setIsSubmitting(false);
    setFormState({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className={`py-20 section-fade ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl font-bold mb-8 text-center ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
          <RoughNotation type="circle" color={theme === 'dark' ? '#FF6347' : '#FF4500'} show={true} strokeWidth={3}>
            Let's Connect!
          </RoughNotation>
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-start max-w-4xl mx-auto">
          <form className="w-full md:w-1/2 mb-8 md:mb-0" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formState.name}
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${theme === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-white'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                required 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formState.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${theme === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-white'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                required 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={4} 
                value={formState.message}
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${theme === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-white'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className={`bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center hover-effect ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></span>
              ) : (
                <Send size={20} className="mr-2" />
              )}
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          <div className="w-full md:w-1/3">
            <h3 className="text-2xl font-semibold mb-4">Connect with me</h3>
            <div className="space-y-4">
              <a href="https://linkedin.com/in/stephanvolynets" target="_blank" rel="noopener noreferrer" className={`flex items-center ${theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} transition-colors`}>
                <Linkedin size={24} className="mr-2" /> LinkedIn
              </a>
              <a href="https://github.com/stephanvolynets" target="_blank" rel="noopener noreferrer" className={`flex items-center ${theme === 'dark' ? 'text-gray-400 hover:text-gray-300' : 'text-gray-700 hover:text-gray-900'} transition-colors`}>
                <Github size={24} className="mr-2" /> GitHub
              </a>
              <a href="mailto:sv468@cornell.edu" className={`flex items-center ${theme === 'dark' ? 'text-red-400 hover:text-red-300' : 'text-red-600 hover:text-red-700'} transition-colors`}>
                <Mail size={24} className="mr-2" /> sv468@cornell.edu
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;