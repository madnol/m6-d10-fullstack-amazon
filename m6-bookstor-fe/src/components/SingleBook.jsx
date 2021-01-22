import React from "react";
import { Card, Button } from "react-bootstrap";
//let { book } = props //
// let book = props.book

const SingleBook = props => {
  const { img, title, price } = props.book;

  // const [modalShow, setModalShow] = React.useState(false);

  return (
    <Card className={"mx-auto my-4"} style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={img}
        style={{ height: "300px", "object-fit": "cover" }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>$ {price}</Card.Text>
      </Card.Body>
      <Button onClick={props.onClick}>See comments</Button>
    </Card>
  );
};

export default SingleBook;
