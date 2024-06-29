import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className='mx-auto flex max-w-6xl flex-col items-center px-4 md:px-8 pb-8 text-sm text-white'>
      <div className='flex space-x-4 mb-4'>
      
        <a href='https://www.linkedin.com/in/sahil-srivastav-8b0562229/' target='_blank' rel='noopener noreferrer' className='hover:text-blue-700'>
          <FaLinkedin size={24} />
        </a>
        <a href='https://github.com/sahil-1234' target='_blank' rel='noopener noreferrer' className='hover:text-gray-400'>
          <FaGithub size={24} />
        </a>
      </div>
      <div className='text-center'>
        &copy; {new Date().getFullYear()} | Sahil
      </div>
      <div className='text-center mt-2'>
        <a href='/privacy-policy' className='hover:underline'>Privacy Policy</a> | 
        <a href='/terms-of-service' className='hover:underline'> Terms of Service</a>
      </div>
    </footer>
  );
}
