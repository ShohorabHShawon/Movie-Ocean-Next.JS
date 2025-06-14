import React from 'react';
import NavbarItem from './NavbarItem';

export default function Navbar() {
  return (
    <div className="font-bold flex shadow-md dark:shadow-gray-800 items-center justify-center gap-8 lg:text-lg pb-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* <NavbarItem title="Latest" param="fetchLatest"></NavbarItem> */}
      <NavbarItem title="Trending" param="fetchTrending"></NavbarItem>
      <NavbarItem title="Top Rated" param="fetchTopRated"></NavbarItem>
    </div>
  );
}
