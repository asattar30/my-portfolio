import React from "react";

export default function Navbar({ about, projects, services, menuitem }) {
  const About = () => {
    return about();
  };

  const Projects = () => {
    return projects();
  };

  const Services = () => {
    return services();
  };

  return (
    <div className="Navbar">
      <nav>
        <ul>
          <li onClick={About}>
            {menuitem === "About" ? (
              <a
                href="#about"
                style={{
                  color: "#c06c84",
                  border: "2px dotted #c06c84",
                  fontWeight: "bold",
                  padding: "7px",
                  borderRadius: "10px",
                }}
              >
                About
              </a>
            ) : (
              <a href="#about">About</a>
            )}
          </li>
          <li onClick={Projects}>
            {menuitem === "Projects" ? (
              <a
                href="#projects"
                style={{
                  color: "#c06c84",
                  border: "2px dotted #c06c84",
                  fontWeight: "bold",
                  padding: "7px",
                  borderRadius: "10px",
                }}
              >
                Projects
              </a>
            ) : (
              <a href="#projects">Projects</a>
            )}
          </li>
          <li onClick={Services}>
            {menuitem === "Services" ? (
              <a
                href="#services"
                style={{
                  color: "#c06c84",
                  border: "2px dotted #c06c84",
                  fontWeight: "bold",
                  padding: "7px",
                  borderRadius: "10px",
                }}
              >
                Services
              </a>
            ) : (
              <a href="#services">Services</a>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
