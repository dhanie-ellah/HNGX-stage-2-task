import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useParams } from "react-router-dom";

const Details = () => {
  const [movieList, setMovieList] = useState({});
  const { id } = useParams();
  // window.scroll(0,0)

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=fe000c48191963f3078b7125258aee8d`
      )
      .then((movies) => {
        setMovieList(movies.data);
        console.log(movies);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div key={id}>
      {/* Background Image */}
      <img src={`https://image.tmdb.org/t/p/w500${movieList.backdrop_path}`} alt="" className=" w-[100%] relative max-h-screen" />

      <div className=" w-screen h-screen bg-white opacity-80 absolute top-0 left-0 md:opacity-50">

      </div>

      <div className=" flex gap-[2rem] p-[3rem] items-center absolute top-5 left-5 md:static md:p-[1rem]">
        <img src={`https://image.tmdb.org/t/p/w500${movieList.poster_path}`} alt="" className="w-[25%] md:absolute md:top-5 md:left-5 md:w-[30%]"/>
        <div className=" w-[55%] md:w-full" >
          <p data-testid="movie-title" className=" text-5xl font-bold text-gray-800 md:text-xl">{movieList.original_title}</p>
          <div className=" text-xl flex gap-2 items-center text-gray-500 md:text-sm">
            <p data-testid="movie-release-date">{movieList.release_date}</p>
            <FontAwesomeIcon icon={faCircle} className=" text-[0.30rem]" />
            <p data-testid="movie-runtime">{movieList.runtime} mins</p>
          </div>

          <p data-testid="movie-overview" className=" w-[55%] text-xs md:w-full">
            {movieList.overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
