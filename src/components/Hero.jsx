import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div id="centre" className="px-8 sm:px-16 sm:mx-16 md:px-8 md:mx-8">
      <h2 className="font-satoshi text-base sm:text-4xl font-medium text-[#BBC8FF]">
        {' '}
        Hello world, my name is{' '}
      </h2>
      <h1 className="font-rubik text-4xl sm:text-8xl py-4 sm:text-transparent sm:bg-clip-text sm:bg-gradient-to-br sm:via-[#4704AF] text-off-white sm:from-primary-blue sm:to-[#FF2C32]">
        Thanakon Kimsan
      </h1>
      <p className="font-satoshi text-off-white text-3xl sm:text-4xl font-bold ">
        I'm a{' '}
        <TypeAnimation
          sequence={['Student', 1000, 'Designer', 1000, 'Engineer', 1000]}
          wrapper="b"
          cursor={true}
          repeat={Infinity}
          className="text-[#BBC8FF]"
        />
      </p>
      <p id="hero-paragraph" className="py-4 text-l sm:text-2xl">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
        impedit placeat repellendus assumenda unde atque modi voluptate vero
        totam, tenetur illum, sint aut labore. Minima nobis inventore dolorum
        distinctio? Id!
      </p>
    </div>
  );
};

export default Hero;
