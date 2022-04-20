import React, { Component } from "react";
import "../styles/Register.scss";
import { Container, Form, Row, Col, Modal, Button } from "react-bootstrap";
import ustLogo from "../assets/ustLogo.png";
import ustCICSLogo from "../assets/ustCICSLogo.png";

export default class Register extends Component {
  DATA;

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      studentNumber: "",
      fName: "",
      lName: "",
      mName: "",
      college: "",
      prog: "",
      year: "",
      pass: "",
      confirm: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // event handlers

  handleClose() {
    this.setState({ show: false });
  }
  handleShow() {
    this.setState({ show: true });
  }
  handleChange(event) {
    const name = event.target && event.target.id;
    const value = event.target && event.target.value;
    this.setState({ [name]: value });
    //console.log(event.target.value)
  }
  handleSubmit(event) {
    if (
      this.state.studentNumber === "" &&
      this.state.fName === "" &&
      this.state.lName === "" &&
      this.state.mName === "" &&
      this.state.college === "" &&
      this.state.prog === "" &&
      this.state.year === "" &&
      this.state.pass === "" &&
      this.state.confirm === ""
    ) {
      alert("All fields in the form must be filled.");
    } else if (this.state.pass === this.state.confirm) {
      console.log(this.state);
      localStorage.setItem("Register", JSON.stringify(this.state));
      alert("Registered Successfuly!");
      document.location.href = "/";
    } else {
      alert("Password doesn't match!");
      console.log(this.state);
    }
  }
  reset() {
    window.reload();
  }

  render() {
    return (
      <>
        <Container fluid className="login">
          <Row>
            {/* C1: Form */}
            <Col className="column2-login" sm={7}>
              {/* Row 1: Header */}
              <Row>
                <Col sm md lg={2}>
                  {" "}
                  <img src={ustCICSLogo} alt="ustCICSLogo" width={73} />
                </Col>
                <Col className="header-text">
                  <h5 className="college-text">
                    College of Information and Computing Sciences
                  </h5>
                  <h3 className="graduate-text">Thomasian Graduates</h3>
                </Col>
              </Row>
              {/* Row 2: Form */}
              <Form className="forms row" onSubmit={this.handleSubmit}>
                <h4 className="thomasian-text mb-3 mt-1">Registration</h4>
                <Form.Group>
                  <Row>
                    <Col>
                      <Form.Label className="labels">
                        Student Number:
                      </Form.Label>
                      <Form.Control
                        type="number"
                        id="studentNumber"
                        placeholder="2018118045"
                        className="mb-2"
                        onChange={this.handleChange}
                        required={true}
                      />

                      <Form.Label className="labels">Last Name:</Form.Label>
                      <Form.Control
                        type="text"
                        id="lName"
                        placeholder="Dela Cruz"
                        className="mb-2"
                        onChange={this.handleChange}
                        required={true}
                        pattern="[A-Za-z]"
                      />

                      <Form.Label className="labels">Given Name:</Form.Label>
                      <Form.Control
                        type="text"
                        id="fName"
                        placeholder="Juan"
                        className="mb-2"
                        onChange={this.handleChange}
                        required={true}
                        pattern="[A-Za-z]"
                      />

                      <Form.Label className="labels">Middle Name:</Form.Label>
                      <Form.Control
                        type="text"
                        id="mName"
                        placeholder="Martinez"
                        className="mb-2"
                        onChange={this.handleChange}
                        required={true}
                        pattern="[A-Za-z]"
                      />

                      <Form.Label className="labels">College:</Form.Label>
                      <Form.Control
                        type="text"
                        id="college"
                        placeholder="College of Information and Computing Sciences"
                        className="mb-5"
                        onChange={this.handleChange}
                        required={true}
                        pattern="[A-Za-z]"
                      />
                    </Col>
                    <Col>
                      <Form.Label className="labels">
                        Program Enrolled:
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="prog"
                        placeholder="BS Information Technology"
                        className="mb-2"
                        onChange={this.handleChange}
                        required={true}
                        pattern="[A-Za-z]"
                      />
                      <Form.Label className="labels">Year Level:</Form.Label>
                      <Form.Control
                        type="number"
                        id="year"
                        placeholder="4"
                        className="mb-2"
                        onChange={this.handleChange}
                        required={true}
                        
                      />
                      <Form.Label className="labels">Password:</Form.Label>
                      <Form.Control
                        type="password"
                        id="pass"
                        placeholder="Password"
                        aria-describedby="passwordHelpBlock"
                        className="mb-2"
                        onChange={this.handleChange}
                        required={true}
                      />
                      <Form.Label className="labels">
                        Confirm Password:
                      </Form.Label>
                      <Form.Control
                        type="password"
                        id="confirm"
                        placeholder="Confirm Password"
                        aria-describedby="passwordHelpBlock"
                        className="mb-2"
                        onChange={this.handleChange}
                        required={true}
                      />
                    </Col>
                  </Row>
                </Form.Group>
                {/* modal */}
                <Modal show={this.state.show} onHide={this.handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Register to Thomasian Graduates</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                      Cancel
                    </Button>
                    <Button
                      variant="success"
                      type="submit"
                      onClick={this.handleSubmit}
                    >
                      Register
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Form>

              <button
                type="button"
                className="btn btn-login mb-3"
                onClick={this.handleShow}
              >
                Register
              </button>
            </Col>
            {/* C2: UST Background */}
            <Col className="column1-ust">
              <img
                className="ust-logo"
                src={ustLogo}
                alt="ustLogo"
                width={180}
              />
              <h5 className="pontifical-text">
                Pontifical and Royal <br /> The University of Santo Tomas
              </h5>
              <h2 className="thomasian-text">Thomasian Graduates</h2>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

//export default Register;
