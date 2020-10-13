import React from "react";

export default function Services() {
  return (
    <div className="Services">
      <div className="ServicesGrid">
        <div>
          <img src={"web-design.png"} alt="card1" />
          <h5>Web Design</h5>
        </div>
        <div>
          <img src={"web-development.png"} alt="card2" />
          <h5>Web Development</h5>
        </div>
        <div>
          <img src={"graduate.png"} alt="card3" />
          <h5>Graduation Projects</h5>
        </div>
        <div>
          <img src={"paid-courses.png"} alt="card4" />
          <h5>Paid Courses</h5>
        </div>
        <div>
          <img src={"technical-support.png"} alt="card5" />
          <h5>Technical Consultant</h5>
        </div>
      </div>
    </div>
  );
}
