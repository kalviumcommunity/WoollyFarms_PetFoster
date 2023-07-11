import React from "react";
import { useParams } from "react-router-dom";
import animals from "../Adopt/data";
import Navbar from "../Navbar/Navbar";
import "./Details.css";

const Details = () => {
  const { animalType, animalID } = useParams();

  const pet = animals.find(
    (animal) =>
      animal.animalType === animalType && animal.id === parseInt(animalID)
  );

  if (!pet) {
    return <p>Pet not found.</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="details">
        <div className="details-left">
          {" "}
          <div className="img-container">
            <img src={pet.image} alt="" className="pet-image" />
          </div>
          <div className="contact-box">
            <h1
              style={{
                color: "white",
                fontFamily: "poppins",
                fontWeight: "400",
              }}
            >
              Considering{" "}
              <span style={{ fontWeight: "700", fontSize: "25px" }}>
                {pet.name}
              </span>{" "}
              for adoption?
            </h1>
            <div className="contact-icons">
              <button>Contact Owner</button>
              {/* <img src={pet.image} alt="" />
              <img src={pet.image} alt="" /> */}
            </div>
          </div>
        </div>
        <div className="details-right">
          <div style={{ width: "90%" }}>
            <h1
              style={{
                fontSize: "7rem",
                fontFamily: "poppins",
                lineHeight: "65px",
                color: "#9d61f1",
              }}
            >
              {pet.name}
            </h1>
            <p
              style={{
                paddingLeft: "0.5rem",
                fontSize: "1.8rem",
                lineHeight: "3rem",
              }}
            >
              {pet.age} • {pet.breed} • {pet.sex}
              <br />
              {pet.address}
            </p>
            <hr
              style={{
                height: "2px",
                backgroundColor: "#9d61f1",
              }}
            />
            <span>
              <b
                style={{
                  fontSize: "2rem",
                  lineHeight: "3rem",
                }}
              >
                Health
              </b>
              <p
                style={{
                  fontSize: "1.4rem",
                  lineHeight: "0.5rem",
                }}
              >
                {pet.health}
              </p>
            </span>
            <span>
              <b
                style={{
                  fontSize: "2rem",
                  lineHeight: "4rem",
                }}
              >
                Adoption Fee
              </b>
              <p
                style={{
                  fontSize: "1.4rem",
                  lineHeight: "0.5rem",
                }}
              >
                {pet.adoptionFee}
              </p>
            </span>
            <hr
              style={{
                height: "3px",
                backgroundColor: "#9d61f1",
              }}
            />
            <span>
              <b
                style={{
                  fontSize: "2rem",
                  lineHeight: "4rem",
                }}
              >
                More Information
              </b>
              <p
                style={{
                  fontSize: "1.4rem",
                  lineHeight: "0.5rem",
                }}
              >
                {pet.moreInformation}
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
