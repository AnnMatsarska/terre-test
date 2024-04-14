'use client';

import React from 'react';
import Image from 'next/image';

const NavBar = () => {
  return (
    <div className="text-white">
      <nav>
        <ul className="font-arsenal text-xl font-normal leading-5 flex gap-[41px] items-center">
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
