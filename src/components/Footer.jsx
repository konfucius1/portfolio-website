import React from 'react';
import logo from '../assets/tk-logo-main.svg';

const Footer = () => {
  return (
    <footer className="font-rubik footer footer-center mt-20 p-10 bg-neutral-800 bg-opacity-25 text-off-white md:block">
      <div>
        <img src={logo} alt="Logo" className="h-10 my-4" />
        <p className="font-rubik text-xs opacity-60 font-light">
          All images have been self-photographed or created, and all other icons
          have been appropriately credited to their original creators as
          required.
          <br />
        </p>
        <p className="font-rubik font-semibold opacity-60 text-xs">
          Designed and Developed by <br />
        </p>
        <a
          href="https://github.com/cissa-unimelb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="font-rubik font-semibold opacity-80">
            --- CISSA --- <br />
          </p>
        </a>
        <p className="font-rubik opacity-70">
          Copyright © 2023 - All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
