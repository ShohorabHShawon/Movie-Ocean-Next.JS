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
    <div className="w-full flex justify-center">
      <BackButton />
      <div className="max-w-[90%] w-full relative ">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            data.backdrop_path || data.poster_path
          }`}
          alt={data.title}
          width={1000}
          height={500}
          className="blur-[4px] transition duration-100 ease-in-out mx-auto rounded-lg object-cover w-[400px] sm:w-[500px] md:w-[600px] lg:w-[800px] xl:w-[1000px] z-0"
        />
        <div className="relative z-10 flex flex-col items-center -mt-24 sm:-mt-28 md:-mt-32 lg:-mt-36 xl:-mt-52">
          {' '}
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              data.poster_path || data.backdrop_path
            }`}
            alt={data.title}
            width={300}
            height={750}
            className="hover:scale-110 transition duration-300 ease-in-out shadow-md rounded-lg object-cover mb-4 w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px]"
          />
          <div className="max-w-5xl">
            <h1 className="text-2xl md:text-3xl font-bold text-center my-4">
              {data.title || data.name}
            </h1>
            <p className="text-base md:text-lg text-center from-neutral-600 max-w-6xl:">
              {data.overview}
            </p>

            <p className="text-base md:text-lg text-center font-medium mt-2">
              Release Date: {data.release_date || data.first_air_date}
            </p>

            <p className="text-base md:text-lg text-center font-medium">
              Rating: {data.vote_average}
            </p>

            <p className="text-base md:text-lg text-center mb-10 font-medium">
              Votes: {data.vote_count}
            </p>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
