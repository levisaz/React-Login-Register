import React from "react";
import "../styles/Register.scss";
import { Container, Form, Row, Col } from "react-bootstrap";
import ustLogo from "../assets/ustLogo.png";
import ustCICSLogo from "../assets/ustCICSLogo.png";
const Register = () => {
  return (
    <>
        <Container fluid className="login">
            <Row>
                {/* C1: Form */}
                <Col className="column2-login" sm={7}>
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
                    <h2 className="thomasian-text">Register</h2>
                    <Form.Group controlId="exampleForm.ControlInput1">

                        <Row>
                            <Col>
                            <Form.Label className="labels">Student Number:</Form.Label>
                        <Form.Control
                        type="number"
                        id="studentNumber"
                        placeholder="2018118045"
                        className="mb-2"
                        />

                        <Form.Label className="labels">Last Name:</Form.Label>
                        <Form.Control 
                            type="text"
                            id="lastName"
                            placeholder="Dela Cruz"
                            className="mb-2"
                        />

                        <Form.Label className="labels">Given Name:</Form.Label>
                        <Form.Control 
                            type="text"
                            id="lastName"
                            placeholder="Juan"
                            className="mb-2"
                        />
                        
                        <Form.Label className="labels">Middle Name:</Form.Label>
                        <Form.Control 
                            type="text"
                            id="lastName"
                            placeholder="Martinez"
                            className="mb-2"
                        />

                        <Form.Label className="labels">College:</Form.Label>
                        <Form.Control 
                            type="text"
                            id="lastName"
                            placeholder="College of Information and Computing Sciences"
                            className="mb-2"
                        />
                            </Col>
                            <Col>
                            <Form.Label className="labels">Program Enrolled:</Form.Label>
                        <Form.Control 
                            type="text"
                            id="lastName"
                            placeholder="BS Information Technology"
                            className="mb-2"
                        />
                        <Form.Label className="labels">Year Level:</Form.Label>
                        <Form.Control 
                            type="number"
                            id="lastName"
                            placeholder="4"
                            className="mb-2"
                        />
                        <Form.Label className="labels">Password:</Form.Label>
                        <Form.Control
                        type="password"
                        id="password"
                        placeholder="Password"
                        aria-describedby="passwordHelpBlock"
                        className="mb-2"
                        />
                        <Form.Label className="labels">Confirm Password:</Form.Label>
                        <Form.Control
                        type="password"
                        id="password"
                        placeholder="Confirm Password"
                        aria-describedby="passwordHelpBlock"
                        className="mb-2"
                        />
                            </Col>
                        </Row>
                        
                        
                    </Form.Group>
                    </Row>
                    <button type="button" className="btn btn-login">
                    Register
                    </button>
                    
                </Col>
                {/* C2: UST Background */}
                <Col className="column1-ust" >
                <img className="ust-logo" src={ustLogo} alt="ustLogo" width={180} />
                <h5 className="pontifical-text">
                    Pontifical and Royal <br /> The University of Santo Tomas
                </h5>
                <h2 className="thomasian-text">Thomasian Graduates</h2>
                </Col>
            
            </Row>
        </Container>
    </>
  );
};

export default Register;
