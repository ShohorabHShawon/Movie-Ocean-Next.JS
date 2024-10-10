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
      className="flex px-4 mt-8 py-3 border-2 overflow-hidden max-w-md mx-auto 
      font-[sans-serif] rounded-full shadow-md"
      action=""
    >
      <input
        type="text"
        placeholder="Search Something..."
        className="w-full outline-none bg-transparent"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="disabled:hidden"
        type="submit"
        disabled={search === ''}
      >
        <BsSearch className="h-6 w-6 text-[#ff6347] " />
      </button>
    </form>
  );
}
