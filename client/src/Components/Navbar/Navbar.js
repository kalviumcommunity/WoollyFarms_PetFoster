import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);

  const handleMenu = () => {
    setisOpen(!isOpen);
  };

  return (
    <header className="header">
      <section className="flex">
        <a href="#home" className="logo">
          PetFoster
        </a>
        <nav className={`navbar ${isOpen ? "open" : ""}`}>
          <a href="#about">About us</a>
          <a href="#joinAbout">Our Program</a>
          <a href="#bAbout">Blog</a>
          <a href="#pricing">Contact</a>
          <a href="/">
            <button href="#contact" className="adopt-now-btn">
              Adopt Now
            </button>
          </a>
        </nav>
        <div
          id="menu-btn"
          className={`fas fa-bars ${isOpen ? "fa-times" : ""}`}
          onClick={handleMenu}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
      </section>
    </header>
  );
};

export default Navbar;
