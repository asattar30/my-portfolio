import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram, AiFillGithub, AiFillYoutube } from "react-icons/ai";

export default function SocialIcons() {
  return (
    <div className="Social">
      <a href="https://facebook.com/AliSattarBarani">
        <FaFacebook className="SocialIcon" />
      </a>
      <a href="https://www.instagram.com/asattar_29/">
        <AiFillInstagram className="SocialIcon" />
      </a>
      <a href="https://github.com/asattar30">
        <AiFillGithub className="SocialIcon" />
      </a>
      <a href="https://www.youtube.com/channel/UCgJJUE42J8-x-qopxkRHVSQ">
        <AiFillYoutube className="SocialIcon" />
      </a>
    </div>
  );
}
