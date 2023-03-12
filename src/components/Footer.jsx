import React from 'react';
import logo from '../assets/tk-logo-grey.svg';

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-neutral-800 bg-opacity-25 text-off-white md:block">
      <div>
        <img src={logo} alt="Logo" className="h-10 my-4" />
        <p className="font-light">
          Designed and Developed by <br />
        </p>
        <p className="font-bold">
          Thanakon Kimsan <br />
        </p>
        <p className="font-medium">
          Website best viewed on Firefox
          <br />
        </p>
        <p>Copyright © 2023 - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
