import React, { Component } from "react";
import "../styles/Register.scss";
import { Container, Form, Row, Col } from "react-bootstrap";
import ustLogo from "../assets/ustLogo.png";
import ustCICSLogo from "../assets/ustCICSLogo.png";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default class Register extends Component {
  DATA;

  constructor(props) {
    super(props);
    this.state = {
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

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // event handlers

  handleChange(event) {
    const name = event.target && event.target.id;
    const value = event.target && event.target.value;
    this.setState({ [name]: value });
    console.log(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.pass === this.state.confirm) {
      console.log(this.state);
      localStorage.setItem("Register", JSON.stringify(this.state));
      Swal.fire({
        title: "Registed Successfully",
        text: "Redirecting to Portal",
      });
      localStorage.getItem("Register");
      window.location = "/";
    } else if (this.state.pass !== this.state.confirm) {
      Swal.fire({
        title: "Error!",
        text: "Passwords don't match",
      });
    }
  }

  reset() {
    window.location.reload();
  }

  render() {
    return (
      <>
        <Container fluid className="login register">
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
                <h5 className="thomasian-text mb-2">Registration</h5>
                <Form.Group>
                  <Row>
                    <Col>
                      <Form.Label className="labels">
                        Student Number:
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="studentNumber"
                        placeholder="2018118045"
                        className="mb-2"
                        onChange={this.handleChange}
                        required={true}
                        pattern="[0-9]+"
                        maxLength={10}
                        minLength={10}
                        title="Please enter numeric inputs only"
                      />

                      <Form.Label className="labels">Last Name:</Form.Label>
                      <Form.Control
                        type="text"
                        id="lName"
                        placeholder="Dela Cruz"
                        className="mb-2"
                        onChange={this.handleChange}
                        required={true}
                        pattern="[a-zA-Z ]*"
                      />

                      <Form.Label className="labels">Given Name:</Form.Label>
                      <Form.Control
                        type="text"
                        id="fName"
                        placeholder="Juan"
                        className="mb-2"
                        onChange={this.handleChange}
                        required={true}
                        pattern="[a-zA-Z ]*"
                      />

                      <Form.Label className="labels">Middle Name:</Form.Label>
                      <Form.Control
                        type="text"
                        id="mName"
                        placeholder="Martinez"
                        className="mb-2"
                        onChange={this.handleChange}
                        required={true}
                        pattern="[a-zA-Z ]*"
                      />

                      <Form.Label className="labels">College:</Form.Label>
                      <Form.Control
                        type="text"
                        id="college"
                        placeholder="College of Information and Computing Sciences"
                        className="mb-5"
                        onChange={this.handleChange}
                        required={true}
                        pattern="[a-zA-Z ]*"
                      />
                    </Col>
                    <Col>
                      <Form.Label className="labels">Year Level:</Form.Label>
                      <Form.Control
                        type="text"
                        id="year"
                        placeholder="4"
                        className="mb-2"
                        onChange={this.handleChange}
                        required={true}
                        maxLength={1}
                        pattern="[0-9]+"
                        title="Please enter numeric inputs only"
                      />
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
                        pattern="[a-zA-Z ]*"
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
                        pattern="(?=.*[_\W])(?=.*?[#?!@$%^&*-\]\[])(?=.*[A-Z]).{8,}"
                        title="Must contain at least (1) number and (1) uppercase character, (1) special character, and at least (8) or more characters"
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
                        pattern="(?=.*[_\W])(?=.*\d)(?=.*[A-Z]).{8,}"
                        title="Must contain at least (1) number and (1) uppercase character, (1) special character, and at least (8) or more characters"
                      />
                    </Col>
                  </Row>
                </Form.Group>

                <div className="button-holder">
                  <button
                    type="button"
                    className="btn btn-login mb-2 mx-3 btn-secondary"
                    onClick={this.reset}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-login ">
                    Register
                  </button>
                </div>

                <div className="back d-flex justify-content-center mt-2">
                  <a href="/" className="align-center">
                    Go back to login
                  </a>
                </div>
              </Form>
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
