import React from 'react';
import logo from '../assets/tk-logo-grey.svg';

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-neutral-800 bg-opacity-25 text-primary-content text-off-white">
      <div>
        <img src={logo} alt="Logo" className="h-10 my-4" />
        <p className="font-light">
          Designed and Built by <br />
        </p>
        <p className="font-bold">
          Thanakon Kimsan <br />
        </p>
        <p className="font-medium">
          Click here to get source code <br />
        </p>
        <p>Copyright © 2023 - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
