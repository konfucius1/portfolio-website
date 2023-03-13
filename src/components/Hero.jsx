import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import MobileSocial from '../components/MobileSocial';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div id="centre" className="px-8 md:px-8 md:mx-8 pt-16">
      <h2 className="font-satoshi text-lg sm:text-2xl font-medium text-[#BBC8FF]">
        {' '}
        Hello world, my name is{' '}
      </h2>
      <h1 className="font-rubik text-6xl sm:text-8xl py-4 text-transparent bg-clip-text bg-gradient-to-br via-[#4704AF]  from-primary-blue to-[#FF2C32]">
        Thanakon Kimsan
      </h1>
      <p className="font-satoshi text-off-white text-4xl sm:text-4xl font-bold ">
        I'm a{' '}
        <TypeAnimation
          sequence={['Student', 1000, 'Designer', 1000, 'Engineer', 1000]}
          wrapper="b"
          cursor={true}
          repeat={Infinity}
          className="text-[#BBC8FF]"
        />
      </p>
      <p id="hero-paragraph" className="py-4 text-l font-thin sm:text-2xl">
        Passionate about building software products that makes lives better.
        Currently focusing on developing software development skills and gaining
        industry experience.
      </p>
      <MobileSocial />
      <div className="flex flex-row justify-between items-center rounded-3xl my-28 sm:mt-52 bg-gradient-to-r via-[#132c9b]  to-primary-blue from-[#182768]">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title font-rubik">Interested?</h2>
            <p className="font-satoshi font-thin">
              Find out more about my technical skills and background
            </p>
          </div>
        </div>
        <div className="px-8">
          <Link to="/about">
            <button className="btn bg-[#10071c] font-rubik text-off-white rounded-2xl w-36">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
