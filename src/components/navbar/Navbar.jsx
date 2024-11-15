"use client"
import React, { useState } from 'react';
import cart from '../../assets/cart.png'
import Image from 'next/image';

// import navlinks
import { navLinks } from '@/components/sub-components/navbar/navLinks';

// import react icons
import { FaAngleDown } from "react-icons/fa";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleSubMenu = (title) => {
    setActiveMenu(activeMenu === title ? null : title);
  };

  return (
    <nav className='flex justify-between items-center w-full xl:w-3/5 px-[1%] xl:px-[0%] py-3 mx-auto'>
      <div className={`flex gap-1 items-end`}>
        <h2 className='lg:hidden'>
          {
            isOpen ? (
              <IoMdClose className='text-3xl cursor-pointer' onClick={() => setIsOpen(!isOpen)} />
            ) : (
              <IoReorderThreeOutline className='text-3xl cursor-pointer' onClick={() => setIsOpen(!isOpen)} />
            )
          }
        </h2>
        <h1 className='text-3xl font-bold cursor-pointer'>Logo</h1>
      </div>

      <div className={`absolute lg:static top-16 w-1/2 lg:w-auto h-screen lg:h-auto p-6 lg:p-0 bg-secondary lg:bg-transparent transform ${isOpen ? 'left-0 -translate-x-0' : '-left-[100%] -translate-x-full lg:translate-x-0'} transition-transform duration-300 z-50 ease-in-out shadow-lg lg:shadow-none`} >
        <ul className={`${isOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row gap-4  xl:text-lg`}>
          {navLinks.map((link, index) => (
            <li key={index} className="relative">
              {link.url ? (
                <a href={link.url} className='cursor-pointer'>
                  {link.title}
                </a>
              ) : (
                <h2
                  className='flex gap-1 items-center cursor-pointer'
                  onClick={() => toggleSubMenu(link.title)}
                >
                  {link.title} <FaAngleDown className='text-xl' />
                </h2>
              )}

              {/* Submenu */}
              {activeMenu === link.title && link.options && (
                <ul className='lg:absolute top-full mt-2 bg-transparent lg:bg-white lg:border lg:shadow-lg lg:rounded-md lg:py-2 min-w-[200px]'>
                  {link.options.map((option, index) => (
                    <li key={index}>
                      <a href={option.url} className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>
                        {option.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className='flex gap-2 lg:gap-6 items-center'>
        <Image src={cart} alt="Cart Icon" className="w-8 h-8 cursor-pointer" />
        <button className='bg-primary text-white py-2 px-4 rounded-full cursor-pointer'>Login</button>

      </div>


    </nav>
  );
};

export default Navbar;