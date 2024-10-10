import React from 'react';
import NavbarItem from './NavbarItem';

export default function Navbar() {
  return (
    <div className=" font-bold flex shadow-md items-center justify-center gap-8 lg:text-lg p-4">
      {/* <NavbarItem title="Latest" param="fetchLatest"></NavbarItem> */}
      <NavbarItem title="Trending" param="fetchTrending"></NavbarItem>
      <NavbarItem title="Top Rated" param="fetchTopRated"></NavbarItem>
    </div>
  );
}
