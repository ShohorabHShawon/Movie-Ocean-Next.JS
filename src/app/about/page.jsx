import Link from 'next/link';
import React from 'react';

export default function About() {
  return (
    <div className="max-w-6xl mx-auto p-3 space-y-4 my-10">
      <h1 className="text-4xl font-bold text-[#ff6347]">About</h1>
      <p className="text-xl my-5">
        {' '}
        This is a Movie Database Project. I made this project to learn about
        Next js, Tailwind CSS, and how to use API in a project.{' '}
      </p>
      <p className="text-xl my-5">
        {' '}
        I used the TMDB Movie Database API to fetch the data.{' '}
      </p>{' '}
      <p className="text-xl my-5"> Thank you for visiting my app. 😊 </p>{' '}
      <h1 class="text-xl font-bold">
        Check my
        <Link
          href="https://shohorabhshawon.vercel.app/"
          class="text-[#ff6347] hover:text-blue-700 ml-2 underline"
        >
          PORTFOLIO.
        </Link>
      </h1>
    </div>
  );
}
