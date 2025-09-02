import React from 'react';
import undp_logo from '../assets/undp_logo.png';
import bihar_government_logo from '../assets/bihar_government.png';
import bsdma_logo from '../assets/bihardss.png';
import ipf_global_logo from '../assets/undp.png';
import { Link } from 'react-router-dom';

const Footer1 = () => {
  return (
    <footer className="bg-none border-t border-gray-200 py-5   mt-4">
      <div className="max-w-full mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
          {/* Copyright Text */}
          <div className="text-xs text-gray-600 text-center sm:text-left">
            <span>© 2025 IPE Global | Developed for BSDMA by IPE Global in collaboration with UNDP</span>
            <br />
            <span className='mr-1'>
               <a href="mailto:info@bsdma.org" >
    Email : info@bsdma.org
  </a>

            </span>
            <span>Helpline : 0612-2547232</span>
            <br />
            <span className='text-xs text-gray-600 text-center sm:text-left'> <Link to="/termsandconditions">Terms and Conditions</Link></span>
          </div>

          {/* Organization Logos */}
          <div className="flex items-center space-x-4">
            {/* BSDMA Logo */}
            <img 
              src={bsdma_logo} 
              alt="BSDMA" 
              className="h-10 w-auto object-contain"
            />
            
            {/* Bihar Government Logo */}
            <img 
              src={bihar_government_logo} 
              alt="Government of Bihar" 
              className="h-10 w-auto object-contain"
            />
            
            {/* UNDP Logo */}
            <img 
              src={undp_logo} 
              alt="UNDP" 
              className="h-10 w-auto object-contain"
            />
            
            {/* IPF Global Logo */}
            <img 
              src={ipf_global_logo} 
              alt="IPF Global" 
              className="h-10 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
