'use client';
import React from 'react';
import { useEffect } from 'react';

export default function error({ error, reset }) {
  useEffect(() => {
    setTimeout(() => {
      reset();
    }, 5000);
  }, [error]);
  return (
    <div className="text-center mt-10 font-bold">
      <h1>Something went wrong. Please try again!</h1>
      <button className="hover:text-[#ff6347] text-[#ff6347]" onClick={reset}>
        Try Again
      </button>
    </div>
  );
}
