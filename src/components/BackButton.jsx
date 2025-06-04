'use client';
import React from 'react';
import { HiArrowCircleLeft } from 'react-icons/hi';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();
  return (
    <div>
      {' '}
      <button
        className="fixed mt-4 text-[#ff6347] text-4xl dark:hover:text-white hover:text-black z-50  transition duration-300 ease-in-out"
        onClick={() => router.back()}
      >
        <HiArrowCircleLeft />
      </button>
    </div>
  );
}
