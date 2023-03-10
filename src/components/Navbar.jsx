import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/tk-logo-main.svg';
import menu from '../assets/hamburger-menu-svgrepo-com.svg';
import close from '../assets/close.svg';

const Navbar = () => {
  let Links = [
    { name: 'About', link: '/about' },
    { name: 'Experience', link: '/experience' },
    { name: 'Projects', link: '/projects' },
    { name: 'Contact', link: '/contact' },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-10">
      <div className="md:flex bg-dark flex items-center justify-between py-4 md:px-20 md:py-10 px-7 mx-auto">
        <Link to="/">
          <img src={logo} className="pt-2 w-14 h-14 md:w-20" alt="Logo" />
        </Link>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <img src={open ? close : menu} className="" alt=""></img>
        </div>

        <ul
          className={`md:flex md:items-center gap-2 md:pb-0 pb-12 absolute md:static bg-dark rounded-lg md:bg-dark md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-20 opacity-100' : 'top-[-490px]'
          } md:opacity-100 opacity-0`}
        >
          {Links.map((link) => (
            <li key={link.link} className="md:ml-8 text-l md:my-0 my-7">
              <Link
                to={link.link}
                className="text-off-white hover:text-primary-blue duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <button className="bg-gradient-to-l from-primary-blue to-[#607EFF] hover:bg-off-white font-montserrat btn text-off-white aspect-auto w-32 text-l md:ml-8 ">
            Resume
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
