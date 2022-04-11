import React from "react";
import "../styles/Login.scss";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import ustLogo from "../assets/ustLogo.png";
import ustCICSLogo from "../assets/ustCICSLogo.png";
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <Container fluid className="login">
        <Row>
          {/* C1: UST Background */}
          <Col className="column1-ust" sm={7}>
            <img className="ust-logo" src={ustLogo} alt="ustLogo" width={180} />
            <h5 className="pontifical-text">
              Pontifical and Royal <br /> The University of Santo Tomas
            </h5>
            <h2 className="thomasian-text">Thomasian Graduates</h2>
          </Col>
          {/* C2: Form */}
          <Col className="column2-login">
            {/* Row 1: Header */}
            <Row>
              <Col sm md lg={3}>
                {" "}
                <img src={ustCICSLogo} alt="ustCICSLogo" width={80} />
              </Col>
              <Col className="header-text">
                <h5 className="college-text">
                  College of Information and Computing Sciences
                </h5>  
                <h3 className="graduate-text">Thomasian Graduates</h3>
              </Col>
            </Row>
            {/* Row 2: Form */}
            <Row className="forms">
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label className="labels">Student Number:</Form.Label>
                <Form.Control
                  type="number"
                  id="studentNumber"
                  placeholder="2018118045"
                  className="mb-4 fields"
                />

                <Form.Label className="labels">Password:</Form.Label>
                <Form.Control
                  type="password"
                  id="password"
                  placeholder="enter password"
                  aria-describedby="passwordHelpBlock"
                  className="fields"
                />
              </Form.Group>
            </Row>
            <button type="button" className="btn btn-login">
              Login
            </button>
            <Row className="register-row">
              <span className="dont-text">
                Don’t have an account?{" "}
                <Link className="register-now-text" to="/register"> Register now!</Link>
              </span>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
