import "./SideBar.css";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const checkboxRef = useRef(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
      if (checkboxRef.current) {
        checkboxRef.current.checked = false;
      }
    }
  }, [isOpen]);

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-left">
        <label className="sidebar-button">
          <input type="checkbox" onChange={toggleMenu} ref={checkboxRef} />
        </label>
      </div>
      <aside className={`sidebar-menu ${isOpen ? "open" : ""}`}>
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="link home-item"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="link"
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link
          to="experience"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="link"
          onClick={() => setIsOpen(false)}
        >
          Experience
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="link"
          onClick={() => setIsOpen(false)}
        >
          Projects
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="link contact-item"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
      </aside>
    </div>
  );
};

export default SideBar;
