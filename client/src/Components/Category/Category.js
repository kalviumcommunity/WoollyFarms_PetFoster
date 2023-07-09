import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Category.css";
import CustomCard from "./CustomCard";
import dog_icon from "../../Assets/dog.svg";
import category_dog from "../../Assets/category-dog.png";
import category_cat from "../../Assets/category-cat.png";
import cat_icon from "../../Assets/cat.svg";

const Category = () => {
  return (
    <div>
      <Navbar />
      <div className="category">
        <h1 style={{ textAlign: "center", fontSize: "18px" }}>
          Find your{" "}
          <span
            style={{
              fontSize: "22px",
              color: "#9d61f1",
            }}
          >
            {" "}
            PAW-FECT{" "}
          </span>{" "}
          friends here!
        </h1>
        <div className="category-container">
          <CustomCard
            title="dogs"
            imageSrc={category_dog}
            appIconSrc={dog_icon}
            category="Unleash love and find your furry soulmate among our charming dogs."
            buttonText="Woof"
          />
          <CustomCard
            title="cats"
            imageSrc={category_cat}
            appIconSrc={cat_icon}
            category="Find your purr-fect match and experience feline love with our enchanting cats."
            buttonText="meow"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
