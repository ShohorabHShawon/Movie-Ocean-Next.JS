import Image from 'next/image';
import Link from 'next/link';

export default function MovieCard({ result }) {
  return (
    <div className="my-4 mx-3 rounded-lg bg-white dark:bg-gray-800 shadow-md dark:shadow-gray-900/50">
      <div className="hover:scale-105 transition duration-300 ease-in-out rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
        <Link href={`/movie/${result.id}`}>
          <div className="relative w-full aspect-[9/12]">
            <Image
              className="object-cover"
              src={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
              alt={result.title || result.original_name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
              priority
            />
          </div>
          <div className="p-3 bg-white dark:bg-gray-800">
            <h1 className="text-lg font-semibold text-gray-900 dark:text-white text-center truncate mb-1">
              {result.title || result.name}
            </h1>
            <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
              <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                {(result.release_date || result.first_air_date)?.substring(0, 4)}
              </span>
              <div className="flex items-center">
                <p className="text-gray-900 text-xs font-bold dark:text-yellow-400">
                      ⭐ {result.vote_average.toFixed(1)}
                    </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
