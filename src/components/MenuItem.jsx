import Link from 'next/link';
import React from 'react';

export default function MenuItem({ title, address, Icon }) {
  return (
    <Link 
      href={address} 
      className="hover:text-[#ff6347] dark:hover:text-[#ff7f50] transition-colors duration-200 group"
    >
      <Icon className="text-2xl sm:hidden text-gray-700 dark:text-gray-300 group-hover:text-[#ff6347] dark:group-hover:text-[#ff7f50]" />
      <p className="uppercase hidden sm:inline text-sm text-gray-700 dark:text-gray-300 group-hover:text-[#ff6347] dark:group-hover:text-[#ff7f50]">
        {title}
      </p>
    </Link>
  );
}
