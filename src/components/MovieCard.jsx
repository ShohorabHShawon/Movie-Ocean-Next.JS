import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiThumbsUp } from 'react-icons/fi';

export default function MovieCard({ result }) {
  return (
    <div className="my-4 mx-3 rounded-lg bg-white dark:bg-gray-800 shadow-md dark:shadow-gray-900/50">
      <div className="hover:scale-105 transition duration-300 ease-in-out rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
        <Link href={`/movie/${result.id}`}>
          <Image
            className="w-full h-80 object-cover transition duration-300 ease-in-out"
            src={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
            alt={result.title || result.original_name}
            width={500}
            height={320}
          />
          <div className="p-4 bg-white dark:bg-gray-800">
            <h1 className="text-lg font-semibold text-gray-900 dark:text-white text-center truncate mb-3">
              {result.title || result.name}
            </h1>

            <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
              <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                {(result.release_date || result.first_air_date)?.substring(0, 4)}
              </span>
              <div className="flex items-center">
                <FiThumbsUp className="h-4 w-4 mr-1 text-blue-500 dark:text-blue-400" />
                <span className="font-medium">{result.vote_count}</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
