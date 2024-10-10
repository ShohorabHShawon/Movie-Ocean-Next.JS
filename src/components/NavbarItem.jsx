'use client';
import Link from 'next/link';
import React from 'react';
import { useSearchParams } from 'next/navigation';

export default function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');
  return (
    <div>
      <Link
        className={`hover:bg-[#ff6347] hover:text-white rounded-lg px-2 py-2 
            dark:hover:bg-white dark:hover:text-black ${
              genre === param
                ? 'bg-[#ff6347] rounded-lg px-2 py-2 dark:bg-white dark:text-black shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'
                : 'text-gray-600 dark:text-gray-200'
            }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
