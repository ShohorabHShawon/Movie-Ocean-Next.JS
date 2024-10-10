import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiThumbsUp } from 'react-icons/fi';

export default function MovieCard({ result }) {
  return (
    <div className="my-4 mx-3 rounded-lg">
      <div className="shadow-xl hover:scale-110 transition duration-300 ease-in-out rounded-lg p-2">
        <Link href={`/movie/${result.id}`}>
          <Image
            className="rounded-lg w-full h-full object-cover 
            transition duration-300 ease-in-out"
            src={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
            alt={result.title || result.original_name}
            width={500}
            height={100}
          />
          <div className="p-2">
            <h1 className="text-xl font-bold text-center truncate mx-2">
              {result.title || result.name}
            </h1>

            <p className="flex items-center justify-between">
              <span>{result.release_date || result.first_air_date}</span>
              <span className="flex items-center ml-auto">
                <FiThumbsUp className="h-5 w-5 mx-2" />
                {result.vote_count}
              </span>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
