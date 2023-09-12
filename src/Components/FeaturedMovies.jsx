import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Moviecard from './Moviecard';
import React from 'react'

const FeaturedMovies = () => {
  return (
    <div className=" p-[3rem]">
      <section className=" flex justify-between items-center">
        <h1 className=" text-lg font-semibold">Featured Movie</h1>
        <a
          href=""
          className=" text-xs text-rose flex items-center gap-[0.2rem]"
        >
          See more{" "}
          <FontAwesomeIcon icon={faChevronRight} className=" text-[0.5rem]" />
        </a>
      </section>

      <Moviecard />
    </div>
  );
}

export default FeaturedMovies