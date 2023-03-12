import React from 'react';

const HeroImage = ({ image, name, desc }) => {
  return (
    <div
      className="hero h-96 rounded-xl filter grayscale hover:grayscale-0"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="hero-overlay bg-opacity-50 "></div>
      <div className="hero-content text-center text-off-white shadow-sm">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{name}</h1>
          <p className="mb-5 text-xl">{desc}</p>
          <button className="btn bg-primary-blue text-off-white">{name}</button>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
