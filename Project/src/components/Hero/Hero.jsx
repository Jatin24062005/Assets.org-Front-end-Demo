// Hero.js
import React from 'react';
import { Button,ButtonSecondary } from '../ui/button'; // Adjust the import path if necessary
import logo from './hero_bg.mp4'; // Ensure the correct path to your video file

const Hero = () => {
  return (
    <div className="relative my-2 h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={logo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50 z-20"></div>
      <div className="relative flex-col items-center content-center justify-center h-full w-full text-center text-white z-50">
        <div className='flex justify-center mb-4 items-center'>
      <h1 className="text-5xl font-bold ">Welcome to Our Platform</h1>
      <p className="text-lg mb-6">Empowering you with innovative solutions and unparalleled support.</p></div>
        <Button className="rounded-xl" variant="outline">Click me</Button>
       </div>
       
        
        
    </div>
  );
};

export default Hero;
