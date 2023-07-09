import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import PropTypes from "prop-types";

const CustomCard = ({ title, category, imageSrc, appIconSrc, buttonText }) => (
  <Card css={{ w: "42%", h: "420px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, padding: "20px" }}>
      <Col>
        <Text size={40} weight="bold" transform="uppercase" color="#9E9E9E">
          {title}
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src={imageSrc}
        objectFit="cover"
        width="100%"
        height="100%"
        alt="Card background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        backgroundColor: "rgba(157, 97, 241, 0.50)",
        borderTop: "$borderWeights$light solid $gray800",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Row>
            <Col span={3}>
              <Card.Image
                src={appIconSrc}
                css={{ bg: "white", br: "50%" }}
                height={40}
                width={40}
                alt="App icon"
              />
            </Col>
            <Col>
              <Text color="white" size={12}>
                {category}
              </Text>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Button
              flat
              auto
              rounded
              css={{
                color: "#f5f2ea",
                bg: "rgba(157, 97, 241)",
                p: "20px",
                right: "20px",
              }}
            >
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                {buttonText}
              </Text>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);

CustomCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  appIconSrc: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default CustomCard;
