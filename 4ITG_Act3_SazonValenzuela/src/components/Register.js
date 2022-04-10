import React from "react";
import "../styles/Register.scss";
import { Container, Form, Button } from "react-bootstrap";
const Register = () => {
  return (
    <Container className="register mt-5 d-flex justify-content-center">
    
        <Form>
        <h2>Register</h2>
            <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
                <Form.Label>Student ID Number</Form.Label>
                <Form.Control type="email" placeholder="2018123456" />
            </Form.Group>

            <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="email" placeholder="Doe" />
            </Form.Group>

            <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
                <Form.Label>Given Name</Form.Label>
                <Form.Control type="email" placeholder="John" />
            </Form.Group>

            <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
                <Form.Label>Middle Name</Form.Label>
                <Form.Control type="email" placeholder="Chesterfieeld" />
            </Form.Group>

            <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
                <Form.Label>College</Form.Label>
                <Form.Control type="email" placeholder="CICS" />
            </Form.Group>

            <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
                <Form.Label>Program Enrolled</Form.Label>
                <Form.Control type="email" placeholder="BS Information Technology" />
            </Form.Group>

            <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
                <Form.Label>Year Level</Form.Label>
                <Form.Control type="email" placeholder="4" />
            </Form.Group>

            <Form.Group className="mb-3 form-group" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3 form-group" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="" />
            </Form.Group>

            <Form.Group className="mb-3 form-group" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </Container>
  );
};

export default Register;
