import React from 'react';
import MovieCard from './MovieCard';

export default function Results({ results }) {
  return (
    <div className="">
      <div
        className="grid grid-cols-2 sm:grid sm:grid-cols-2 md:grid-cols-3 
      lg:grid-cols-4 xl:grid-cols-5 max-w-7xl mx-auto py-4"
      >
        {results.map((result) => (
          <MovieCard key={result.id} result={result} />
        ))}
      </div>
    </div>
  );
}
