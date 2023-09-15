import React, { useState, useEffect } from "react";
// import Backdrop from "../Assets/Backdrop.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
// import Filmcover from '../Assets/filmCover.png'
import { useParams } from "react-router-dom";

const Details = () => {
  const [movieList, setMovieList] = useState([]);
  const {id} = useParams()

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated/${id}?api_key=fe000c48191963f3078b7125258aee8d`
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
    <div key={id}>
      {/* Background Image */}
      <img src={`https://image.tmdb.org/t/p/w500${movieList.backdrop_path}`} alt="" className=" w-[100%] relative" />
      {/*  */}
      <div className=" w-[90%] m-auto absolute top-10 left-10 flex gap-[2rem]">
        <img src={`https://image.tmdb.org/t/p/w500${movieList.poster_path}`} alt="" />
        <div >
          <p data-testid="movie-title">{movieList.original_title}</p>
          <div className=" text-2xl flex gap-2 items-center text-gray-500">
            <FontAwesomeIcon icon={faCircle} className=" text-[0.30rem]" />
            <p data-testid="movie-release-date">{movieList.release_date}</p>
            <FontAwesomeIcon icon={faCircle} className=" text-[0.30rem]" />
            <p data-testid="movie-runtime">{movieList.runtime} mins</p>
          </div>

          <p data-testid="movie-overview" className=" w-[50%] text-xs">
            After thirty years, Maverick is still pushing the envelope as a top
            naval aviator, but must confront ghosts of his past when he leads
            TOP GUN's elite graduates on a mission that demands the ultimate
            sacrifice from those chosen to fly it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
