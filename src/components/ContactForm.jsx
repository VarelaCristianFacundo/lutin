import React from "react";
import { Container, Form } from "react-bootstrap";

export default function ContactForm() {
  return (
    <>
      <div id="contact"></div>
      <Container>
        <Form className="formContact">
          <h1>Contacto</h1>
          <p>Puedes contactarnos usando el siguiente formulario</p>
          <Form.Group controlId="form.Name" className="formContent">
            <Form.Control type="text" placeholder="Escribe tu nombre" />
          </Form.Group>
          <br />
          <Form.Group controlId="form.Name" className="formContent">
            <Form.Control type="email" placeholder="Escribe tu email" />
          </Form.Group>
          <Form.Group controlId="form.Textarea" className="formContent">
            <br />
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Escribe tu mensaje"
            />
          </Form.Group>
          <br />
          <div className="btn-center">
            <button className="btn-vermas">Enviar Mensaje</button>
          </div>
        </Form>
      </Container>
    </>
  );
}
