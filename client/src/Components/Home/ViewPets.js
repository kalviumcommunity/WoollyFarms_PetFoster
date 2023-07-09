import { Card, Grid, Text, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function ViewPets() {
  return (
    <Card css={{ p: "$6", mw: "600px", h: "400px" }}>
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
              ABOUT US
            </Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$8", fs: "18px", fontFamily: "poppins" }}>
        <Text>
          At PetFoster, our primary goal is to create perfect matches between
          pets and families, ensuring that every adoption brings immense joy and
          lasting happiness. With our user-friendly platform, finding your ideal
          companion has never been easier. Whether you're looking for a cuddly
          cat, a playful pup, or any other furry friend, PetFoster is here to
          guide you through the adoption process, connecting you with the
          perfect pet to enrich your life with love and create cherished
          memories.
        </Text>
      </Card.Body>
      <Card.Footer>
        <Link icon color="primary" to="/category">
          <Button
            flat
            auto
            rounded
            color="secondary"
            css={{ p: "$12", size: "40px" }}
          >
            <Text
              css={{
                color: "inherit",
                textDecoration: "none",
              }}
              size={14}
              weight="bold"
            >
              View Pets
            </Text>
          </Button>
        </Link>
      </Card.Footer>
    </Card>
  );
}
