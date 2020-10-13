import React, { useState } from "react";
import Brand from "./Brand";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import DropdownMenu from "./DropdownMenu";
import MainHeader from "./MainHeader";
import Tools from "./Tools";
import Projects from "./Projects";
import Services from "./Services";

export default function MainComponent() {
  const [menuItem, setMenuItem] = useState("About");
  const [section, setSection] = useState("MainHeader");

  const changeActive = (Item) => {
    if (Item === "Projects") {
      setMenuItem(Item);
      setSection("MyProjects");
    } else if (Item === "About") {
      setMenuItem("About");
      setSection("MainHeader");
    } else {
      setMenuItem("Services");
      setSection("MyServices");
    }
  };

  return (
    <center>
      <div className="MainBackground">
        <div className="Topbar">
          <Brand logoUrl={"logo.png"} />
          <Navbar
            menuitem={menuItem}
            about={() => changeActive("About")}
            projects={() => changeActive("Projects")}
            services={() => changeActive("Services")}
          />
          <SocialIcons />
          <DropdownMenu
            menuitem={menuItem}
            about={() => changeActive("About")}
            projects={() => changeActive("Projects")}
            services={() => changeActive("Services")}
          />
        </div>
        {section === "MainHeader" && <MainHeader />}
        {section === "MyProjects" && <Projects />}
        {section === "MyServices" && <Services />}

        <Tools />
      </div>
    </center>
  );
}
