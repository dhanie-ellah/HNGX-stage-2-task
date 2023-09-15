import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import IMDb from "../Assets/IMDb.png";
import Fruit from "../Assets/fruit.png";
import { Link } from "react-router-dom";

const Moviecard = ({ movie }) => {
  return (
    <div
      className="w-[30%] h-auto pb-10 grid md:w-[48%]"
      data-testid="movie-card"
    >
      <Link
        key={movie.id}
        to={`/detail/${movie.id}`}
        className=" relative w-[75%] m-auto md:w-[100%]"
        data-testid="movie-poster"
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt=""
          className=" w-[100%]"
        />
        <FontAwesomeIcon
          icon={faHeart}
          className=" text-white bg-white bg-opacity-70 rounded-full p-2 absolute top-4 right-4 md:text-xs md:top-2 md:right-2"
        />

        <section className=" w-[100%] m-auto flex flex-col gap-[0.1rem] md:w-[100%] md:gap-0">
          {/* Movie title */}
          <p className=" font-bold text-lg" data-testid="movie-title">
            {movie ? movie.title : movie.name}
          </p>

          {/* Release date */}
          <p
            className=" text-xs text-gray-400 font-bold"
            data-testid="movie-release-date"
          >
            {movie.release_date}
          </p>

          {/* Rating */}
          <div className=" flex justify-between items-center">
            <div className=" flex gap-[0.5rem]">
              <img src={IMDb} alt="" />
              <p className=" text-sm md:text-xs">
                {movie.vote_average}/10
              </p>
            </div>

            <div className=" flex gap-[0.5rem]">
              <img src={Fruit} alt="" />
              <p className=" text-sm md:text-xs">
                {movie.vote_average * 10}%
              </p>
            </div>
          </div>

          <p className=" text-xs text-gray-400 font-bold">{movie.genre}</p>
        </section>
      </Link>
    </div>
  );
};

export default Moviecard;
