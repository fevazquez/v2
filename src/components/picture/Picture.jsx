import React from "react";
import { Card } from "react-bootstrap";

import { StyledPicture } from "./Picture.styled";
import { string } from "prop-types";

const Picture = ({ title, body, img }) => {
  let not_found =
    "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png";
  return (
    <StyledPicture>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img ? img : not_found} />
        <Card.Body className="portrait-details">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{body}</Card.Text>
        </Card.Body>
      </Card>
    </StyledPicture>
  );
};

Picture.propTypes = {
  title: string.isRequired,
  body: string.isRequired,
  img: string.isRequired,
};

export default Picture;