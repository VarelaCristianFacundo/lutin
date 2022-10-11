import React, { useState } from "react";
import { Alert, Container, Form } from "react-bootstrap";

export default function ContactForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const {name, email, message} = data

  const [success, setSuccess] = useState();
  const [danger, setDanger] = useState();


  const handleChange = e => {
    setData({...data, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) =>{    
    e.preventDefault();

    try{      
      const response = await fetch('https://v1.nocodeapi.com/lutinstudios/google_sheets/EFvEczlezzowvdiD?tabId=contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify([[name,email,message,new Date().toLocaleString()]])
      });
      await response.json()      
      setData({...data, name:'', email:'', message:''})
      setSuccess(true)
    }catch (err){
      console.log (err)
      setDanger(true)
    }

  }

  return (
    <>
      <div id="contact"></div>
      <Container>
        <Form className="formContact" onSubmit={handleSubmit}>
          <h1>Contacto</h1>
          <p>Puedes contactarnos usando el siguiente formulario</p>
          <Form.Group controlId="form.Name" className="formContent">
            <Form.Control type="text" placeholder="Escribe tu nombre" name="name" value={name} onChange={handleChange} />
          </Form.Group>
          <br />
          <Form.Group controlId="form.Name" className="formContent">
            <Form.Control type="email" placeholder="Escribe tu email" name="email" value={email} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="form.Textarea" className="formContent">
            <br />
            <Form.Control
              value={message} onChange={handleChange}
              name="message"
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
        {success ? (
          <Alert key="success" variant="success">
            El mensaje ha sido enviado
          </Alert>
        ) : 
        (
          <></>
        )}
        {danger ? (
          <Alert key="danger" variant="danger">
            El mensaje no pudo enviarse, inténtalo nuevamente
          </Alert>
        ) : 
        (
          <></>
        )}
      </Container>
    </>
  );
}
