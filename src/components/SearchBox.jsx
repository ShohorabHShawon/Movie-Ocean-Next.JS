'use client';
import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useRouter } from 'next/navigation';

export default function SearchBox() {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex items-center max-w-lg mx-auto mt-8"
    >
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search movies, TV shows..."
          className="w-full pl-6 pr-14 py-4 bg-white/10 backdrop-blur-md border border-white/20 
          rounded-2xl text-black dark:text-white placeholder-gray-600 dark:placeholder-gray-300 outline-none focus:border-blue-400 
          focus:bg-white/15 transition-all duration-300 shadow-xl hover:shadow-2xl"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          disabled={search === ''}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2.5 
          bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white 
          disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 
          transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <BsSearch className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
}
