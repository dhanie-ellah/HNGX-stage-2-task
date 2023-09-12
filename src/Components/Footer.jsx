import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div className=" flex flex-col gap-[0.5rem]">
      <div className=" flex justify-center gap-[3rem]">
          <FontAwesomeIcon icon={faFacebookSquare} className=" text-2xl" />
          <FontAwesomeIcon icon={faInstagram} className=" text-2xl" />
          <FontAwesomeIcon icon={faTwitter} className=" text-2xl" />
          <FontAwesomeIcon icon={faYoutube} className=" text-2xl" />
      </div>

      <div className=" flex justify-center gap-[3rem] text-sm">
        <a href="">Conditions of Use</a>
        <a href="">Privacy & Policy</a>
        <a href="">Press Room</a>
      </div>

      <p className=" text-grey text-opacity-50 text-center text-sm">
        © 2021 MovieBox by Adriana Eka Prayudha{" "}
      </p>
    </div>
  );
};

export default Footer;
