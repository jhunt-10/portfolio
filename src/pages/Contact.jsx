
// In frontend/src/pages/Contact.jsx

import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail, FiDownload } from 'react-icons/fi';

const Contact = React.forwardRef((props, ref) => {
  const myEmail = 'james.hunt940@icloud.com';
  const myGithubUrl = 'https://github.com/jhunt-10';
  const myLinkedinUrl = 'https://linkedin.com/in/james-hunt-duke';
  const resumeFileName = 'resume.pdf';
  const myResumeUrl = `/${resumeFileName}`;

  return (
    <section ref={ref} id="contact" className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white p-4">
      <h2 className="text-5xl md:text-6xl font-bold mb-4">Get In Touch</h2>
      <p className="text-slate-400 text-lg md:text-xl max-w-2xl text-center mb-12">
        I'm currently open to new opportunities. Feel free to connect with me, send me an email, or check out my resume.
      </p>
      
      <div className="flex items-center space-x-8 md:space-x-12">
        
        <a
          href={myGithubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my GitHub profile"
          className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
        >
          <FaGithub size={48} />
        </a>

        <a
          href={myLinkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my LinkedIn profile"
          className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
        >
          <FaLinkedin size={48} />
        </a>
        
        <a
          href={`mailto:${myEmail}`}
          aria-label="Send me an email"
          className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
        >
          <FiMail size={48} />
        </a>
        
        <a
          href={myResumeUrl}
          download={resumeFileName} 
          aria-label="Download my resume"
          className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
        >
          <FiDownload size={48} />
        </a>
        
      </div>
    </section>
  );
});

export default Contact;