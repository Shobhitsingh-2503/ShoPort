import React from "react";
import { Card } from "react-bootstrap";

const Gallery = () => {
  const photos = [
    {
      id: 1,
      imgURL: "https://ik.imagekit.io/tttjlp0fj/Portfolio/3.jpg?updatedAt=1702802547212",
      name: "Srinagar Airport",
    },
    {
      id: 2,
      imgURL: "https://ik.imagekit.io/tttjlp0fj/Portfolio/6.jpg?updatedAt=1702802563110",
      name: "Lal Chowk",
    },
    {
      id: 3,
      imgURL: "https://ik.imagekit.io/tttjlp0fj/Portfolio/7.jpg?updatedAt=1702802568087",
      name: "Citadel",
    },
    {
      id: 4,
      imgURL: "https://ik.imagekit.io/tttjlp0fj/Portfolio/1.jpg?updatedAt=1702802566284",
      name: "Ghat",
    },
    {
      id: 5,
      imgURL: "https://ik.imagekit.io/tttjlp0fj/Portfolio/2.jpg?updatedAt=1702802540807",
      name: "OLT IIT(ISM)",
    },

    {
      id: 6,
      imgURL: "https://ik.imagekit.io/tttjlp0fj/Portfolio/4.jpg?updatedAt=1702802568194",
      name: "Topchanchi",
    },
    {
      id: 7,
      imgURL: "https://ik.imagekit.io/tttjlp0fj/Portfolio/5.jpg?updatedAt=1702802562954",
      name: "Cafe´ Mocha",
    },
  ];
  return (
    <div className="Hobby">
      <h2>
        <font color="yellow">Gallery</font>
      </h2>
      <div className="wrapper">
        {photos.map((items) => {
          return (
            <Card key={items.id}>
              <Card.Img src={items.imgURL} />
              <Card.Body style={{ color: "white" }}>
                <Card.Title>📍{items.name}</Card.Title>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
