import React from 'react';
import github from '../assets/github-svgrepo-com.svg';
import linkedin from '../assets/linkedin-svgrepo-com.svg';
import instagram from '../assets/instagram-svgrepo-com.svg';
import twitter from '../assets/twitter-boxed-svgrepo-com.svg';

const LeftBar = () => {
  return (
    <div>
      <div id="left" className="flex justify-center items-center min-h-screen">
        <div className="flex-none w-24">
          <img src={github} alt="" className="p-2 w-11" />
          <img src={linkedin} alt="" className="p-2 w-11" />
          <img src={instagram} alt="" className="p-2 w-11" />
          <img src={twitter} alt="" className="p-2 w-11" />
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
