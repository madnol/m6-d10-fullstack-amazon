import React from "react";
import { Button, Modal, Image, Row, Col } from "react-bootstrap";
import CommentsList from "./CommentsList";

class ModalForm extends React.Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.book.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs="12" className="d-flex justify-content-center mb-5">
              <Image
                style={{
                  heigth: "300px",
                  width: "200px",
                  "object-fit": "cover",
                }}
                src={this.props.book.img}
                rounded
              />
            </Col>
            <Col xs="12">
              <CommentsList />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ModalForm;
