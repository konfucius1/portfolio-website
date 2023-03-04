import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

const Sidebar = () => {
  return (
    <div className="fixed right-0 top-1/3">
      <div className="flex flex-col justify-center items-center">
        <a href="#" className="p-3">
          <FaFacebook />
        </a>
        <a href="#" className="p-3">
          <FaInstagram />
        </a>
        <a href="#" className="p-3">
          <FaTwitter />
        </a>
        <a href="#" className="p-3">
          <AiOutlineWhatsApp />
        </a>
        <a href="#" className="p-3">
          <MdEmail />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
