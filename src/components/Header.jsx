import React from 'react';
import MenuItem from '@/components/MenuItem';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';
import Image from 'next/image';

export default function Header() {
  return (
    <div className="">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href={'/'} className="flex gap-1 items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={170}
            height={0}
            className="m-5"
          />
        </Link>
        <div className="flex items-center gap-4 mt-3">
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
