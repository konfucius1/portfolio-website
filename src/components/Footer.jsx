import React from 'react';
import logo from '../assets/tk-logo-grey.svg';

const Footer = () => {
  return (
    <footer className="font-rubik footer footer-center mt-20 p-10 bg-neutral-800 bg-opacity-25 text-off-white md:block">
      <div>
        <img src={logo} alt="Logo" className="h-10 my-4" />
        <p className="font-rubik font-light">
          Designed and Developed by <br />
        </p>
        <p className="font-rubik font-semibold">
          --- Thanakon Kimsan --- <br />
        </p>
        <p className="font-rubik font-medium">
          Website best viewed on Chrome and Firefox
          <br />
        </p>
        <p className="font-rubik">Copyright © 2023 - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
