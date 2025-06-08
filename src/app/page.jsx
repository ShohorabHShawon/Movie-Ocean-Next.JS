import Navbar from '@/components/Navbar';
import Results from '@/components/Results';
import SearchBox from '@/components/SearchBox';
import Image from 'next/image';

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'fetchTrending';
  
  // Fetch main results
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } },
  );

  // Fetch top 5 trending
  const trendingRes = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=en-US`,
    { next: { revalidate: 10000 } },
  );

  const data = await res.json();
  const trendingData = await trendingRes.json();
  
  if (!res.ok || !trendingRes.ok) {
    throw new Error('Failed to fetch data from API');
  }
  
  const results = data.results;
  const topTrending = trendingData.results.slice(0, 5);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white">
    
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 dark:from-blue-600/20 to-purple-600/10 dark:to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 dark:from-blue-400 to-purple-600 dark:to-purple-400 bg-clip-text text-transparent mb-4">
              MOVIE OCEAN
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover the latest movies and trending content
            </p>
          </div>
          <SearchBox />
        </div>
      </div>

      {/* Top 5 Trending Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-500 dark:from-yellow-400 to-orange-500 dark:to-orange-400 bg-clip-text text-transparent">
          🔥 Trending Top 5
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">The hottest movies everyone's talking about</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {topTrending.map((movie, index) => (
            <a key={movie.id} href={`/movie/${movie.id}`} className="group relative block">
              <div className="relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-xl dark:shadow-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-blue-500/25 dark:group-hover:shadow-purple-500/25">
            <div className="absolute top-2 left-2 z-10">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                #{index + 1}
              </span>
            </div>
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title || movie.name}
              className="w-full h-80 object-cover"
              width={500}
              height={500}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="font-semibold text-sm line-clamp-2 text-white">{movie.title || movie.name}</h3>
              <p className="text-yellow-400 text-xs">⭐ {movie.vote_average.toFixed(1)}</p>
            </div>
              </div>
            </a>
          ))}
            </div>
          </div>
          {/* Filter Buttons */}
            <div className="flex justify-center mb-8">
              <div className="flex bg-white dark:bg-gray-800 rounded-xl p-1 shadow-lg dark:shadow-2xl border border-gray-200 dark:border-gray-700">
                <a
                  href="/"
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    genre === 'fetchTrending'
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  🔥 Trending
                </a>
                <a
                  href="/?genre=fetchTopRated"
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    genre === 'fetchTopRated'
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  ⭐ Top Rated
                </a>
              </div>
            </div>
        {/* Main Results Section */}
        <div className="border-t border-gray-300 dark:border-gray-700 pt-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {genre === 'fetchTopRated' ? 'Top Rated Movies' : 'Trending This Week'}
            </h2>
            <div className="h-1 flex-1 ml-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
          </div>
          <Results results={results} />
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-200 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 dark:from-blue-400 to-purple-600 dark:to-purple-400 bg-clip-text text-transparent mb-4">
                MOVIE OCEAN
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Your ultimate destination for discovering movies and trending entertainment content.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Trending</a></li>
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Top Rated</a></li>
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Search</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">About</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Powered by The Movie Database (TMDB) API
              </p>
            </div>
          </div>
          <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © 2024 Movie Ocean. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
