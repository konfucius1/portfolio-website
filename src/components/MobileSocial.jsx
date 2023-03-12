import React from 'react';
import github from '../assets/github-svgrepo-com.svg';
import linkedin from '../assets/linkedin-svgrepo-com.svg';
import instagram from '../assets/instagram-svgrepo-com.svg';
import youtube from '../assets/social-media-icons/youtube-play-svgrepo-com.svg';
import tiktok from '../assets/social-media-icons/tiktok-outline-svgrepo-com.svg';

const MobileSocial = () => {
  return (
    <div className="flex justify-center items-center md:hidden pt-24">
      <div id="left" className="flex flex-row">
        <a
          href="https://github.com/konfucius1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="GitHub" className="p-2 w-11" />
        </a>
        <a
          href="https://www.linkedin.com/in/thanakon/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="LinkedIn" className="p-2 w-11" />
        </a>
        <a
          href="https://www.instagram.com/thanakonkimsan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="Instagram" className="p-2 w-11" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCccATyxN0ssiIUZvTu3B4AA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={youtube} alt="YouTube" className="p-2 w-11" />
        </a>
        <a
          href="https://www.tiktok.com/@thanakon_kimsan?is_from_webapp=1&sender_device=pc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={tiktok} alt="TikTok" className="p-2 w-11" />
        </a>
      </div>
    </div>
  );
};

export default MobileSocial;
