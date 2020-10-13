import React from "react";
import AboutMe from "./AboutMe";
import HeroImage from "./HeroImage";

export default function MainHeader() {
  return (
    <center>
      <div className="MainHeader">
        <AboutMe />
        <HeroImage avatarUrl={"alisattar.png"} />
      </div>
      <div className="Contact">
        <p>
          In case of you need any help or anything else, you can contact with me
          also through my email <b>alisattarbarani@gmail.com</b>
        </p>
      </div>
    </center>
  );
}
