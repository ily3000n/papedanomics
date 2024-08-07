"use client";
import React from "react";
import Image from 'next/image'; // Import the Image component from Next.js
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
  return (
    <div className="h-auto w-full bg-white flex items-center justify-center ">
      <div className="flex items-center w-full justify-between">
        <div className="flex items-center justify-start w-2/4">
        <a href="/">
          <Image 
            src="/thumbnail.png" // Replace with the path to your logo image
            alt="Logo"
            width={100} // Adjust width as needed
            height={100} // Adjust height as needed
            className="object-contain"
          />
          </a>
        </div>
        <div className="flex items-center justify-end w-2/4">
          {/* <h1 className="md:text-7xl text-2xl lg:text-md font-bold text-blue-950 text-left"> */}
            <TypeAnimation
              sequence={[
                'PAPEDANOMICS',
                1000,
                'PAPEDANOMICS 2024 ',1000,
                
              ]}
              speed={50}
              style={{ fontSize: '2rem' }}
              repeat={Infinity}
              className="md:text-3xl text-2xl lg:text-md font-bold text-blue-950 text-left"
            />
          {/* </h1> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
