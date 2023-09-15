import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios";
import { useState, useEffect } from "react";
import Moviecard from './Moviecard';
import React from 'react'

const FeaturedMovies = () => {

    const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=fe000c48191963f3078b7125258aee8d"
      )
      .then((movies) => {
        setMovieList(movies.data.results);
        console.log(movies);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className=" p-[3rem] md:p-[1rem] flex flex-col gap-5">
      <section className=" flex justify-between items-center">
        <h1 className=" text-lg font-semibold">Featured Movie</h1>
        <p
          className=" text-xs text-rose flex items-center gap-[0.2rem]"
        >
          See more
          <FontAwesomeIcon icon={faChevronRight} className=" text-[0.5rem]" />
        </p>
      </section>

      <div className=' flex flex-wrap justify-between items-start'>
        {
          movieList.slice(0, 10).map(movie => {
            return (
              <Moviecard movie={movie} />
            )
          })
        }
      </div>
    </div>
  );
}

export default FeaturedMovies