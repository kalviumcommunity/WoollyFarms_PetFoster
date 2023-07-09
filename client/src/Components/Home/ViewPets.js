import { Card, Grid, Text, Link, Button } from "@nextui-org/react";
// import { Link } from "react-router-dom";

export default function ViewPets() {
  return (
    <Card css={{ p: "$6", mw: "500px", h: "250px" }}>
      <Card.Header>
        <img
          alt="nextui logo"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width="34px"
          height="34px"
        />
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h1 css={{ lineHeight: "$xs", color: "#9d61f1" }}>
              WHAT WE DO?
            </Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$10", fs: "18px", fontFamily: "poppins" }}>
        <Text>
          With a focus on matching the right pet with the right family,
          PetFoster makes it easy to adopt love and foster happiness.
        </Text>
      </Card.Body>
      <Card.Footer>
        <Link icon color="primary" target="_blank" to="/">
          <Button
            flat
            auto
            rounded
            color="secondary"
            css={{ p: "$10", size: "40px" }}
          >
            <Text css={{ color: "inherit" }} size={14} weight="bold">
              View Pets
            </Text>
          </Button>
        </Link>
      </Card.Footer>
    </Card>
  );
}
