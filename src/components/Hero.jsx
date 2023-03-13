import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import MobileSocial from '../components/MobileSocial';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div id="centre" className="px-4 md:px-8 md:mx-8 pt-16">
      <div className="flex flex-col justify-start items-start">
        <h2 className="font-satoshi text-lg sm:text-2xl font-medium text-[#BBC8FF]">
          Hello world, my name is
        </h2>
        <h1 className="font-rubik text-4xl sm:text-6xl md:text-8xl py-4 text-transparent bg-clip-text bg-gradient-to-br via-[#4704AF] from-primary-blue to-[#FF2C32]">
          Thanakon Kimsan
        </h1>
        <p className="font-rubik text-off-white text-2xl sm:text-4xl font-bold ">
          I'm a{' '}
          <TypeAnimation
            sequence={['Student', 1000, 'Designer', 1000, 'Engineer', 1000]}
            wrapper="b"
            cursor={true}
            repeat={Infinity}
            className="text-[#BBC8FF]"
          />
        </p>
        <p
          id="hero-paragraph"
          className="py-4 text-base sm:text-lg md:text-2xl font-thin font-satoshi text-off-white"
        >
          Deeply passionate about leveraging technology to create software
          products that enhance the quality of life for individuals and
          communities. With a keen interest in software development, I am
          currently focused on honing my skills and gaining valuable industry
          experience to drive innovation and achieve meaningful impact.
        </p>
      </div>

      <MobileSocial />
      <div className="flex justify-center items-center">
        <div className="flex flex-col sm:flex-row justify-between items-center rounded-3xl my-28 sm:mt-52 bg-gradient-to-r via-[#132c9b]  to-primary-blue from-[#182768] w-80 sm:w-full ">
          <div className="card">
            <div className="card-body text-off-white font-rubik">
              <h2 className="card-title">Interested?</h2>
              <p className="font-thin">
                Find out more about my technical skills and background
              </p>
            </div>
          </div>
          <div className="px-8 pb-8 sm:pb-0">
            <Link to="/about">
              <button className="font-rubik btn bg-[#10071c] font-rubik text-off-white rounded-2xl w-36">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
