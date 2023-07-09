import React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import hero_cat from "../../Assets/hero-img.png";
import Ava from "./Avatar";
import Arrow from "./Arrow";
import ViewPets from "./ViewPets";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home">
        <div className="hero-text">
          Adopt love<span style={{ color: "#9d61f1" }}>,</span> <br />
          foster happiness.
        </div>
        <div className="ctc-flow">
          <img className="cat" src={hero_cat} alt="" />
        </div>
        <div className="users">
          <b>Our happy pet owners</b> <br />
          <span style={{ textAlign: "left", fontSize: "15px" }}>
            4.8 (1.5k Reviews)
          </span>
          <Ava />
          <div style={{ width: "80vw", paddingTop: "5rem" }}>
            <Arrow />
          </div>
        </div>
      </div>
      <div className="view">
        <ViewPets />
      </div>
    </div>
  );
};

export default Home;
