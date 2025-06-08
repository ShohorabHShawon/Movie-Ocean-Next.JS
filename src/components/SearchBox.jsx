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
      className="flex px-4 mt-8 py-3 border-2 border-gray-600 bg-gray-800 overflow-hidden max-w-md mx-auto 
      font-[sans-serif] rounded-full shadow-lg hover:border-gray-500 transition-colors duration-200"
      action=""
    >
      <input
        type="text"
        placeholder="Search Movies..."
        className="w-full outline-none bg-transparent text-white placeholder-gray-400"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="disabled:hidden hover:scale-110 transition-transform duration-200"
        type="submit"
        disabled={search === ''}
      >
        <BsSearch className="h-6 w-6 text-[#ff6347] hover:text-orange-400" />
      </button>
    </form>
  );
}
