import BackButton from '@/components/BackButton';
import Navbar from '@/components/Navbar';
import Results from '@/components/Results';
import SearchBox from '@/components/SearchBox';
import React from 'react';

export default async function SearchPage({ params }) {
  const searchTerm = params.searchTerm;
  
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`,
    );
    
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    
    const data = await res.json();
    const results = data.results;

    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <BackButton />
          </div>
          
          <div className="mb-8">
            <SearchBox />
          </div>

          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              Search Results for: &quot;{decodeURIComponent(searchTerm)}&quot;
            </h1>
            {results && (
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Found {results.length} result{results.length !== 1 ? 's' : ''}
              </p>
            )}
          </div>

          {!results || results.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                No results found
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Try searching with different keywords
              </p>
            </div>
          ) : (
            <Results results={results} />
          )}
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">
            Something went wrong
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Unable to fetch search results. Please try again later.
          </p>
        </div>
      </div>
    );
  }
}
