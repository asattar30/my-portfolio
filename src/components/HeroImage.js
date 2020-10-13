import React from "react";

export default function HeroImage({ avatarUrl }) {
  return (
    <div className="ImageSection">
      <img src={avatarUrl} alt="MyImage" className="PersonalImage" />
    </div>
  );
}
