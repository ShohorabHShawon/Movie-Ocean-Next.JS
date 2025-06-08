import React from 'react';
import { FcHome } from 'react-icons/fc';
import { FcAbout } from 'react-icons/fc';
import MenuItem from '@/components/MenuItem';
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';
import Image from 'next/image';

export default function Header() {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md dark:shadow-gray-800 transition-colors duration-300">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href={'/'} className="flex gap-1 items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={170}
            height={0}
            className="m-5"
          />
        </Link>
        <div className="flex items-center gap-4 mt-3 mx-5">
          <DarkModeSwitch />
          <div className="flex gap-4 font-bold text-gray-800 dark:text-gray-200">
            <MenuItem title="Home" address="/" Icon={FcHome} />
            <MenuItem title="About" address="/about" Icon={FcAbout} />
          </div>
        </div>
      </div>
    </div>
  );
}
