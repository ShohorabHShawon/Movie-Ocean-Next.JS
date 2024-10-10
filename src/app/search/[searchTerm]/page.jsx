import Results from '@/components/Results';
import SearchBox from '@/components/SearchBox';
import React from 'react';

export default async function SearchPage({ params }) {
  const searchTerm = params.searchTerm;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`,
  );
  const data = await res.json();
  const result = data.results;

  return (
    <div>
      <SearchBox />
      {result &&
        result.length ===
        <h1 className="text-center pt-6">No results found</h1>}
      {result && <Results results={result} />}
    </div>
  );
}
