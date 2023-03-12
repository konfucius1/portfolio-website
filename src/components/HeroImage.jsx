import React from 'react';
import { Link } from 'react-router-dom';

const HeroImage = ({ image, name, desc, path }) => {
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
          <h1 className="font-satoshi mb-5 text-5xl font-bold">{name}</h1>
          <p className="font-satoshi mb-5 text-xl">{desc}</p>

          <Link to={path}>
            <button className="btn bg-primary-blue text-off-white">
              {name}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
