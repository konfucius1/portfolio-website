import React from 'react';
import HeroImage from './HeroImage';
import ProjectBG from '../assets/background-photos/projects-bg.jpg';
import ExperienceBG from '../assets/background-photos/experience-bg.jpg';

const Divider = () => {
  return (
    <div className="flex flex-col w-full lg:flex-row px-8 py-8 justify-center items-center">
      <div className="grid flex-grow md:w-1/2 md:h-64 card bg-base-300 rounded-box place-items-center">
        <HeroImage
          image={ProjectBG}
          name="Projects"
          desc="Check out some of my previous work!"
        />
      </div>
      <div className="divider lg:divider-horizontal"></div>
      <div className="grid flex-grow md:w-1/2 md:h-64 card bg-base-300 rounded-box place-items-center">
        <HeroImage
          image={ExperienceBG}
          name="Experience"
          desc="Stay up to date with my current work!"
        />
      </div>
    </div>
  );
};

export default Divider;
