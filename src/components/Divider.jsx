import React from 'react';
import HeroImage from './HeroImage';
import ProjectBG from '../assets/background-photos/projects-bg.jpg';
import ExperienceBG from '../assets/background-photos/experience-bg.jpg';

const Divider = () => {
  return (
    <div className="flex flex-col w-full lg:flex-row px-20 py-8">
      <div className="grid flex-grow md:h-64 card bg-base-300 rounded-box place-items-center">
        <HeroImage image={ProjectBG} name="Projects" />
      </div>
      <div className="divider lg:divider-horizontal"></div>
      <div className="grid flex-grow md:h-64 card bg-base-300 rounded-box place-items-center">
        <HeroImage image={ExperienceBG} name="Experiences" />
      </div>
    </div>
  );
};

export default Divider;
