import React from 'react';
import MenuItem from '@/components/MenuItem';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';

export default function Header() {
  return (
    <div className="">
      <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
        <Link href={'/'} className="flex gap-1 items-center">
          <span className="text-3xl font-black bg-[#ff6347] py-2 px-2 rounded-lg">
            MDb
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <DarkModeSwitch />
          <div className="flex gap-4 font-bold">
            <MenuItem title="Home" address="/" Icon={AiFillHome} />
            <MenuItem
              title="About"
              address="/about"
              Icon={BsFillInfoCircleFill}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
