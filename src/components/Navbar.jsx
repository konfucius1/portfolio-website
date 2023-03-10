import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/tk-logo-main.svg';

const Navbar = () => {
  return (
    <div className="bg-dark">
      <nav className="pt-10 px-20">
        <div className="container flex items-center justify-between mx-auto">
          <Link className="flex items-center" to="/">
            <img src={logo} className="w-[85px] h-[55px]" alt="Logo" />
          </Link>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <Link className="text-off-white font-light text-l pr-8" to="/about">
              About
            </Link>
            <Link
              className="text-off-white font-light text-l pr-8"
              to="/experience"
            >
              Experience
            </Link>
            <Link
              className="text-off-white font-light text-l pr-8"
              to="/projects"
            >
              Projects
            </Link>
            <Link
              className="text-off-white font-light text-l pr-8"
              to="/contact"
            >
              Contact
            </Link>
            <button className="bg-gradient-to-l from-primary-blue to-[#607EFF] hover:bg-off-white font-montserrat btn text-off-white aspect-auto w-[120px] h-[50px] text-l ">
              Resume
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
