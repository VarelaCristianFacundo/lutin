import React from "react";
import { Container, Form } from "react-bootstrap";

export default function ContactForm() {
  return (
    <Container>
      <Form>
        <Form.Group controlId="form.Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group controlId="form.Email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="form.Textarea">
          <Form.Label>Comment</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </Container>
  );
}
