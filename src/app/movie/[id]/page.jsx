import BackButton from '@/components/BackButton';
import Image from 'next/image';
import React from 'react';

export default async function MoviePage({ params }) {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`,
  );
  const data = await res.json();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Backdrop with overlay */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            data.backdrop_path || data.poster_path
          }`}
          alt="Backdrop"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent dark:from-slate-900 dark:via-slate-900/60 dark:to-transparent" />
        
        {/* Back Button */}
        <div className="absolute top-6 left-6 z-20">
          <BackButton />
        </div>
      </div>

      {/* Content Section */}
      <div className="relative -mt-32 pb-16 z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Poster */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative group">
                <Image
                  src={`https://image.tmdb.org/t/p/w500/${
                    data.poster_path || data.backdrop_path
                  }`}
                  alt="Movie Poster"
                  width={400}
                  height={600}
                  className="rounded-lg shadow-2xl transition-transform duration-300 group-hover:scale-105 w-64 sm:w-80 lg:w-96"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
              </div>
            </div>

            {/* Movie Details */}
            <div className="flex-1 text-gray-900 dark:text-white">
              <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-xl border border-gray-200 dark:border-slate-700/50">
                
                {/* Title and Rating */}
                <div className="mb-6">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                    {data.title || data.name}
                  </h1>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center bg-yellow-500 text-black px-3 py-1 rounded-full font-bold">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {data.vote_average?.toFixed(1)}
                    </div>
                    
                    <span className="bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-white px-3 py-1 rounded-full text-sm">
                      {data.vote_count} votes
                    </span>
                    
                    {data.release_date && (
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                        {new Date(data.release_date).getFullYear()}
                      </span>
                    )}
                  </div>
                </div>

                {/* Overview */}
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-slate-200">Overview</h2>
                  <p className="text-gray-700 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                    {data.overview || "No overview available."}
                  </p>
                </div>

                {/* Additional Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data.release_date && (
                    <div className="bg-gray-100 dark:bg-slate-700/30 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-800 dark:text-slate-200 mb-1">Release Date</h3>
                      <p className="text-gray-700 dark:text-slate-300">
                        {new Date(data.release_date).toLocaleDateString()}
                      </p>
                    </div>
                  )}
                  
                  {data.runtime && (
                    <div className="bg-gray-100 dark:bg-slate-700/30 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-800 dark:text-slate-200 mb-1">Runtime</h3>
                      <p className="text-gray-700 dark:text-slate-300">{data.runtime} minutes</p>
                    </div>
                  )}
                  
                  {data.genres && data.genres.length > 0 && (
                    <div className="bg-gray-100 dark:bg-slate-700/30 rounded-lg p-4 sm:col-span-2">
                      <h3 className="font-semibold text-gray-800 dark:text-slate-200 mb-2">Genres</h3>
                      <div className="flex flex-wrap gap-2">
                        {data.genres.map((genre) => (
                          <span
                            key={genre.id}
                            className="bg-purple-600/70 text-white px-3 py-1 rounded-full text-sm"
                          >
                            {genre.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
