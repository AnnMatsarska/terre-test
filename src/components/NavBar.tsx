'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="text-white">
      <nav>
        {/* Burger Menu Icon */}
        <div className="block md:hidden">
          {isMenuOpen ? (
            <RxCross2 className="w-[30px] h-[30px]" onClick={toggleMenu} />
          ) : (
            <button
              className="w-[40px] h-[40px] box-border border border-white bg-white flex justify-center items-center"
              onClick={toggleMenu}
            >
              <RxHamburgerMenu className="text-black w-[24px] h-[18px]" />
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={`${isMenuOpen ? 'block' : 'hidden'} h-screen text-black md:hidden absolute top-[89px] left-0 right-0 bg-white`}
        >
          <ul className="font-arsenal text-xl font-normal leading-5 gap-[41px] items-center pt-[23px] px-[10px]">
            <li className="hover:cursor-custom hover:underline mb-[20px] relative">
              menu
              <div className="border-b border-gray-300 w-full mt-[13px]"></div>
            </li>
            <li className="hover:cursor-custom hover:underline mb-[20px] relative">
              book now
              <div className="border-b border-gray-300 w-full mt-[13px]"></div>
            </li>
            <li className="hover:cursor-custom hover:underline mb-[20px] relative">
              gift cards
              <div className="border-b border-gray-300 w-full mt-[13px]"></div>
            </li>
          </ul>
          <div className="flex justify-between px-[10px]">
            <div className="flex gap-[20px]">
              <Image src="/inst-black.png" alt="inst" width={40} height={40} />
              <Image
                src="/fb-black.png"
                alt="facebook"
                width={40}
                height={40}
              />
            </div>
            <Image src="/flag.svg" alt="Logo" width={40} height={40} />
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex font-arsenal text-xl font-normal leading-5 gap-[41px] items-center">
          <li className="hover:cursor-custom hover:underline">menu</li>
          <li className="hover:cursor-custom hover:underline">book now</li>
          <li className="hover:cursor-custom hover:underline">gift cards</li>
          <li className="hover:cursor-custom">
            <Image src="/flag.svg" alt="Logo" width={40} height={26} />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
