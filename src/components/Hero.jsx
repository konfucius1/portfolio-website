import React from 'react';
import Typical from 'react-typical';

const Hero = () => {
  return (
    <div>
      <div id="centre" className="px-8">
        <h2 className="font-satoshi font-medium text-[#BBC8FF]">
          {' '}
          Hello world, my name is{' '}
        </h2>
        <h1 className="font-rubik text-8xl py-4 text-transparent bg-clip-text bg-gradient-to-r via-[#4704AF] from-primary-blue to-[#FF2C32]">
          Thanakon Kimsan
        </h1>
        <p className="font-satoshi text-off-white text-4xl font-bold ">
          I'm a{' '}
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              'Student',
              1000,
              'Developer',
              1000,
              'Designer',
              1000,
              'Engineer',
              1000,
            ]}
          />
        </p>
        <p className="py-4 font-satoshi text-2xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
          impedit placeat repellendus assumenda unde atque modi voluptate vero
          totam, tenetur illum, sint aut labore. Minima nobis inventore dolorum
          distinctio? Id!
        </p>
      </div>
    </div>
  );
};

export default Hero;
