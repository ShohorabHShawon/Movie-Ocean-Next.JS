import React from 'react';

export default function About() {
  return (
    <div className="max-w-6xl mx-auto p-3 space-y-4 my-10">
      <h1 className="text-4xl font-bold text-[#ff6347]">About</h1>
      <p className="text-xl my-5">
        {' '}
        Welcome to our Movie Database, a comprehensive platform designed to
        offer users detailed information on a wide array of movies. From the
        latest blockbusters to timeless classics, our site provides access to
        movie details, including cast and crew information, trailers, reviews,
        and ratings. This project aims to deliver an easy-to-navigate interface,
        making it simple for users to discover new films or dive deep into their
        favorites. Whether you are looking to explore upcoming releases or
        revisit iconic films, our database covers a wide range of genres and
        eras, ensuring there is something for every movie enthusiast.{' '}
      </p>{' '}
      <p className="text-xl my-5">
        {' '}
        Our platform is built using an external API that provides real-time
        data, ensuring that our users always have the most up-to-date
        information on movies. The API allows us to offer users the latest movie
        ratings, detailed actor profiles, trailers, and much more. With a focus
        on user experience, the site is designed to be fast, responsive, and
        accessible on all devices. Explore, search, and discover a world of
        movies with our powerful database at your fingertips.{' '}
      </p>
    </div>
  );
}
