import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import animals from "./data";
import { Input, Spacer, Card, Text, Row, Col, Button } from "@nextui-org/react";
import "./Adopt.css";

const Adopt = () => {
  const { animalType } = useParams();
  const [filter, setFilter] = useState("");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredAnimals = animals.filter((animal) => {
    if (animal.animalType !== animalType) {
      return false;
    }

    const isMatch =
      animal.name.toLowerCase().includes(filter.toLowerCase()) ||
      animal.breed.toLowerCase().includes(filter.toLowerCase()) ||
      animal.age.toLowerCase().includes(filter.toLowerCase()) ||
      animal.sex.toLowerCase().includes(filter.toLowerCase());

    return isMatch;
  });

  return (
    <div>
      <Navbar />
      <div className="adopt">
        <h1 className="title">Adopt a {animalType}</h1>
        <div className="filter-container">
          <Spacer y={2} />
          <Input
            css={{
              w: "400px",
            }}
            size="xl"
            clearable
            value={filter}
            onChange={handleFilterChange}
            color="secondary"
            status="secondary"
            labelPlaceholder={
              <b style={{ fontSize: "1.4rem", fontFamily: "poppins" }}>
                Search for {animalType}s
              </b>
            }
            helperText={
              <b style={{ fontSize: "0.8rem" }}>Enter breed/sex/age</b>
            }
          />
          <Spacer y={1} />
        </div>
        <div className="animal-container">
          {filteredAnimals.length > 0 ? (
            filteredAnimals.map((animal) => (
              <Card
                key={animal.name}
                css={{
                  h: "400px",
                }}
              >
                <Card.Header
                  css={{
                    position: "absolute",
                    zIndex: 1,
                    top: 5,
                    paddingLeft: "20px",
                  }}
                >
                  <Col>
                    <Text
                      size={25}
                      weight="bold"
                      transform="uppercase"
                      color="#ffffffAA"
                    >
                      {animal.name}
                    </Text>
                  </Col>
                </Card.Header>
                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    src={animal.image}
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    alt={animal.name}
                  />
                </Card.Body>
                <Card.Footer
                  isBlurred
                  css={{
                    position: "absolute",
                    backgroundColor: "rgba(157, 97, 241, 0.50)",
                    borderTop:
                      "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                    bottom: 0,
                    zIndex: 1,
                    paddingLeft: "20px",
                  }}
                >
                  <Row>
                    <Col>
                      <Text color="#fff" size={15}>
                        {animal.breed}, {animal.sex}, {animal.age}
                      </Text>
                      <Text color="#fff" size={15}>
                        {animal.adoptionFee}
                      </Text>
                    </Col>
                    <Col>
                      <Row justify="flex-end">
                        <Button
                          flat
                          auto
                          rounded
                          color="secondary"
                          css={{
                            marginRight: "40px",
                            marginTop: "20px",
                            padding: "20px",
                          }}
                        >
                          <Text
                            css={{ color: "inherit" }}
                            size={12}
                            weight="bold"
                            transform="uppercase"
                          >
                            Adopt me
                          </Text>
                        </Button>
                      </Row>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
            ))
          ) : (
            <p>No animals found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Adopt;
