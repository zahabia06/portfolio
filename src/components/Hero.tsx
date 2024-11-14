import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen bg-no-repeat bg-cover"
      style={{
        backgroundImage: 'url(/my.png)',
        backgroundSize: '32%',
        backgroundPosition: 'right 148px top 130px', // Default for larger screens
      }}
      >
        {/* Mobile Specific Styles */}
        <style jsx>{`
        @media (max-width: 768px) {
        #hero {
        background-size: 100%;  /* Increase background size on mobile */
        background-position: center center;  /* Center the image on mobile */
      }
    }
  `}</style>
      <Navbar />
      <div className="container flex flex-col-reverse lg:flex-row items-center h-[calc(100vh-60px)] px-4 sm:px-8 lg:space-x-8">
        
        {/* Text Section */}
        <div className="flex flex-col justify-center text-center lg:text-left lg:w-1/2 mt-8 lg:mt-0">
          <div className="text-[32px] sm:text-[40px] lg:text-[50px] xl:text-[60px] font-bold leading-tight">
            <p data-aos="zoom-in-up">Hello, I'm</p>
            <p data-aos="zoom-in-up">Zahabia Murad</p>
          </div>
          <div className="text-[24px] sm:text-[30px] lg:text-[35px] xl:text-[40px] font-bold mt-2">
            <p data-aos="zoom-in-up">
              And I am a <span className="text-purple-800">web developer</span>
            </p>
          </div>
          <div className="mt-4 text-center lg:text-left text-sm sm:text-base lg:text-lg xl:text-xl text-gray-200 font-medium">
            <p data-aos="zoom-in-up">Bringing ideas to life with code and creativity.</p>
            <p data-aos="zoom-in-up">Dive into my world of web development and design.</p>
          </div>

          {/* Download Resume Button */}
          <div className="mt-8 lg:mt-4">
            <a
              href="resume.pdf"
              download
              className="bg-purple-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base lg:text-lg font-semibold hover:bg-purple-700 transition"
              data-aos="zoom-in-up"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Profile Image Section */}
        <div className="flex justify-center lg:justify-end items-center lg:w-1/2 mb-8 lg:mb-0">
          <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px]">
            <img
              src="my.jpg"
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
