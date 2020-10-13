import React from "react";

export default function Brand({ logoUrl }) {
  return (
    <div className="Brand">
      <img src={logoUrl} alt="SiteLogo" className="Logo" />
      <h4 className="Name">Ali Sattar</h4>
    </div>
  );
}
