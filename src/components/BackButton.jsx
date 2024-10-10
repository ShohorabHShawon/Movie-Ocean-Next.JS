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
        className="relative mt-4 ml-4 text-4xl hover:text-[#ff6347]"
        onClick={() => router.back()}
      >
        <HiArrowCircleLeft />
      </button>
    </div>
  );
}
