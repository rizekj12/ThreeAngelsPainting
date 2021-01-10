import React, { useState } from "react";
import "../CSS/Quote.scss";
import { Form, Col } from "react-bootstrap";
import axios from 'axios'

const Quote = (props) => {

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/f/mleoannk",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };

  return (
    <section className="quoteSect" id="quote">
      <div>
        <h1 className="title">REQUEST A QUOTE</h1>
        <div className="messageDiv">
          <p>
            Call us at <span> 828-332-1311</span> or fill out the form below and
            we will contact you
          </p>
          <p className="p2">Fields marked with an asterisk (*) are required.</p>
        </div>

        <Form className="quoteForm" onSubmit={handleOnSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="inputLabel">First Name*</Form.Label>
              <input className="formInput" type="text" name="firstName" onChange={props.handleFormChange} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label className="inputLabel">Last Name*</Form.Label>
              <input className="formInput" type="text" name="lastName" onChange={props.handleFormChange} />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="inputLabel">Email*</Form.Label>
              <input className="formInput" type="email" name="eMail" onChange={props.handleFormChange}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label className="inputLabel">Phone Number</Form.Label>
              <input className="formInput" type="text" name="phoneNumber" onChange={props.handleFormChange} />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group className="subjectInput">
              <Form.Label className="inputLabel">Subject*</Form.Label>
              <input className="formInput" type="text" name="subject" onChange={props.handleFormChange}/>
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label className="inputLabel">Message*</Form.Label>
            <textarea
              className="formTextArea formInput"
              as="textarea"
              rows={3}
              name="message"
              onChange={props.handleFormChange}
            />
          </Form.Group>

          <button className="quoteButton" type="submit" type="submit" disabled={serverState.submitting}>
            Submit
          </button>

          {serverState.status && (
          <p className={!serverState.status.ok ? "errorMsg" : ""}>
            {serverState.status.msg}
          </p>
        )}

        </Form>
      </div>
    </section>
  );
};

export default Quote;
