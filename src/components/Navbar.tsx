import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container pt-8 relative z-10">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-medium">
          <span className="text-purple-800">Z</span>M
        </div>
        
        {/* Menu items for desktop */}
        <ul className="gap-10 lg:gap-16 hidden md:flex">
          <li className="menuLink"><a href="#hero">Home</a></li>
          <li className="menuLink"><a href="#about">About</a></li>
          <li className="menuLink"><a href="#projects">Projects</a></li>
          <li className="menuLink"><a href="#skills">Skills</a></li>
          <li className="menuLink"><a href="#contact">Contact</a></li>
        </ul>

        {/* Hamburger Icon for mobile with the hover effect */}
        <GiHamburgerMenu 
          className="md:hidden cursor-pointer hamburger-icon" 
          size={30} 
          onClick={toggleMenu} 
        />

        {/* Overlay Background */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-60 z-40"
            onClick={toggleMenu} // Close menu when clicking on overlay
          ></div>
        )}

        {/* Mobile Menu - Visible when isMenuOpen is true */}
        {isMenuOpen && (
          <ul className="md:hidden absolute top-16 right-0 bg-black text-purple font-bold w-3/4 h-[80vh] p-6 flex flex-col items-center rounded-lg shadow-lg z-50">
            <li className="py-2 hover:bg-purple-500 rounded w-full text-center"><a href="#hero">Home</a></li>
            <li className="py-2 hover:bg-purple-500 rounded w-full text-center"><a href="#about">About</a></li>
            <li className="py-2 hover:bg-purple-500 rounded w-full text-center"><a href="#projects">Projects</a></li>
            <li className="py-2 hover:bg-purple-500 rounded w-full text-center"><a href="#skills">Skills</a></li>
            <li className="py-2 hover:bg-purple-500 rounded w-full text-center"><a href="#contact">Contact</a></li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
