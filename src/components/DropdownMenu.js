import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Dropdown } from "react-bootstrap";

export default function DropdownMenu({ about, projects, services }) {
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
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
        <div className="MobileMenu">
          <AiOutlineMenu className="MobileSocialIcon" />
        </div>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#about" onClick={About}>
          About
        </Dropdown.Item>
        <Dropdown.Item href="#projects" onClick={Projects}>
          Projects
        </Dropdown.Item>
        <Dropdown.Item href="#services" onClick={Services}>
          Services
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
