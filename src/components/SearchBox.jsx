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
      className="flex px-4 m-2 py-3 rounded-md border-2 border-[#ff6347] overflow-hidden max-w-md mx-auto 
      font-[sans-serif]"
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
