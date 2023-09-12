import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// import MovieCover from "../Assets/filmCover.png";
import IMDb from "../Assets/IMDb.png";
import Fruit from "../Assets/fruit.png";
import axios from "axios";
import { useState, useEffect } from "react";

const Moviecard = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=fe000c48191963f3078b7125258aee8d"
      )
      .then((movie) => {
        setMovieList(movie.data.results);
        console.log(movie);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="w-[30%] h-auto pb-10 flex flex-wrap items-center">
      {movieList.slice(0, 10).map((movie) => {
        return (
          <div key={movie.id}>
            <section className=" relative w-[80%] m-auto">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=""
                className=" w-[100%]"
              />
              <FontAwesomeIcon
                icon={faHeart}
                className=" text-white bg-white bg-opacity-70 rounded-full p-2 absolute top-4 right-4"
              />
            </section>

            <section className=" w-[80%] m-auto flex flex-col gap-2">
              <p className=" text-xs text-gray-400 font-bold">
                USA, {movie.release_date}
              </p>

              <p className=" font-bold text-lg">{movie.{title || name}}</p>

              <div className=" flex justify-between items-center">
                <div className=" flex gap-[0.5rem]">
                  <img src={IMDb} alt="" />
                  <p className=" text-sm">82.0/100</p>
                </div>
                <div className=" flex gap-[0.5rem]">
                  <img src={Fruit} alt="" />
                  <p className=" text-sm"> 70% </p>
                </div>
              </div>

              <p className=" text-xs text-gray-400 font-bold">{movie.genre}</p>
            </section>
          </div>
        );
      })}
    </div>
  );
};

  

export default Moviecard;
