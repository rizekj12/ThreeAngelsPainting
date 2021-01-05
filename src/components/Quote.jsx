import React from 'react';
import "../CSS/Quote.scss"
import { Form, Col } from 'react-bootstrap'

const Quote = () => {
  return (
    <section className="quoteSect" id="quote">
      <div>
        <h1 className="title">REQUEST A QUOTE</h1>
        <div className="messageDiv">
        <p>Call us at <span> 828-332-1311</span> or fill out the form below and we will contact you</p>
        <p className="p2" >Fields marked with an asterisk (*) are required.</p>
        </div>


        <Form className="quoteForm">
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label className="inputLabel">First Name*</Form.Label>
      <input className="formInput" type="text" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label className="inputLabel">Last Name*</Form.Label>
      <input className="formInput" type="text" />
    </Form.Group>
  </Form.Row>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label className="inputLabel">Email*</Form.Label>
      <input className="formInput" type="email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label className="inputLabel">Phone Number</Form.Label>
      <input className="formInput" type="text" />
    </Form.Group>
  </Form.Row>

  <Form.Row>
  <Form.Group className="subjectInput">
      <Form.Label className="inputLabel">Subject*</Form.Label>
      <input className="formInput" type="text" />
    </Form.Group>
  </Form.Row>
  
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label className="inputLabel">Message*</Form.Label>
    <textarea className="formTextArea formInput" as="textarea" rows={3} />
  </Form.Group>
  
  <button className="quoteButton" type="submit">
    Submit
  </button>
</Form>
        
      </div>
    </section>


  );
}

 
export default Quote;
