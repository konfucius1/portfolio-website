import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/tk-logo-main.svg';

const Navbar = () => {
  return (
    <div className="bg-dark h-screen">
      <nav className="bg-white border-gray-200 px-2 py-2.5 pt-10 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <div className="flex items-center">
            <img src={logo} className="w-[85px] h-[55px]" alt="Logo" />
          </div>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <Link className="text-off-white font-light text-xl pr-8" to="/">
              home
            </Link>
            <Link className="text-off-white font-light text-xl pr-8" to="/">
              about
            </Link>
            <Link className="text-off-white font-light text-xl pr-8" to="/">
              experience
            </Link>
            <Link className="text-off-white font-light text-xl pr-8" to="/">
              projects
            </Link>
            <Link className="text-off-white font-light text-xl pr-8" to="/">
              contact
            </Link>
            <button className="bg-primary-blue font-montserrat btn text-off-white aspect-auto w-[120px] h-[50px] text-l">
              Resume
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
