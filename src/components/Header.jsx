import React from 'react';
import MenuItem from '@/components/MenuItem';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <Link href={'/'} className="flex gap-1 items-center">
        <span className="text-2xl text-white font-bold bg-[#333333] py-2 px-2 rounded-lg">
          MOVIEDB
        </span>
      </Link>

      <div className="flex gap-4">
        <MenuItem title="Home" address="/" Icon={AiFillHome} />
        <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
    </div>
  );
}
