import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const goTo = useNavigate();

  const handleMenu = () => {
    setisOpen(!isOpen);
  };

  return (
    <header className="header">
      <section className="flex">
        <Link to="/" className="logo">
          PetFoster
        </Link>
        <nav className={`navbar ${isOpen ? "open" : ""}`}>
          <Link
            to="/"
            onClick={() => {
              window.scrollTo(0, 500);
              goTo("/");
            }}
          >
            About us
          </Link>
          <a href="#joinAbout">Our Program</a>
          <a href="#bAbout">Blog</a>
          <a href="#pricing">Contact</a>
          <Link to="/category">
            <button href="#contact" className="adopt-now-btn">
              Adopt Now
            </button>
          </Link>
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
