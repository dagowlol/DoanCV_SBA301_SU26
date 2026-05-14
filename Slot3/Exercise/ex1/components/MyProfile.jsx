import React from "react";
import Card from "react-bootstrap/Card";

function MyProfile({ person }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={person.avatar}
        height="250"
      />

      <Card.Body>
        <Card.Title>{person.name}</Card.Title>

        <Card.Text>
          ID: {person.id}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MyProfile;