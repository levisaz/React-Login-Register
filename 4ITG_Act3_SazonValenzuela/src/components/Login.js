//React
import React from "react";
import Form from "react-bootstrap/Form";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
//Assets
import "../styles/Login.scss";
import ustLogo from "../assets/ustLogo.png";
import ustCICSLogo from "../assets/ustCICSLogo.png";

import ConfirmModal from "./ConfirmModal";
const Login = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Details
  const [studentNumberInput, setStudentNumberInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("Register"));
    if (items) {
      setItems(items);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      studentNumberInput == items.studentNumber &&
      passwordInput == items.pass
    ) {
      // Swal.fire({
      //   title: "Successful Login",
      //   showCancelButton: true,
      //   confirmButtonText: "OK",
      // });
      setShow(true);

      // Swal.fire({
      //   title: "Successful Login",
      //   showCancelButton: true,
      //   confirmButtonText: "OK",
      // }).then((result) => {
      //   if (result.isConfirmed) {
      //     setModal(true);
      //     console.log("may pagasa");
      //   } else if (result.isDenied) {
      //     <Link className="register-now-text" to="/">
      //       {" "}
      //       Cancel
      //     </Link>;
      //   }
      // });
    } else {
      Swal.fire({
        title: "Unsuccessful Login",
        text: "Credentials do not match",
        icon: "error",
        confirmButtonText: "OK",
      });
      document.getElementById("formsmoto").reset();
    }
  };

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
              <Form onSubmit={handleSubmit} id="formsmoto">
                <Form.Group>
                  <Form.Label className="labels">Student Number:</Form.Label>
                  <Form.Control
                    required={true}
                    type="text"
                    minLength={10}
                    id="studentNumber"
                    maxLength={10}
                    placeholder="2018118045"
                    className="mb-4 fields"
                    name="studentNumberInput"
                    onChange={(e) => setStudentNumberInput(e.target.value)}
                  />

                  <Form.Label className="labels">Password:</Form.Label>
                  <Form.Control
                    minLength={8}
                    required
                    type="password"
                    id="password"
                    placeholder="enter password"
                    aria-describedby="passwordHelpBlock"
                    className="fields"
                    name="passwordInput"
                    pattern="(?=.*[_\W])(?=.*\d)(?=.*[A-Z]).{8,}"
                    onChange={(e) => setPasswordInput(e.target.value)}
                  />
                </Form.Group>
                <Row className="row-buttons mb-5">
                  {/* <Col>
                    {" "}
                    <button
                      type="button"
                      className="btn btn-cancel"
                      onClick={() =>
                        document.getElementById("form-onclick").reset()
                      }
                    >
                      Cancel
                    </button>
                  </Col>
                  <Col>  </Col>*/}
                  <button type="submit" className="btn btn-login">
                    Login
                  </button>
                </Row>
              </Form>
            </Row>

            <ConfirmModal
              handleShow={handleShow}
              show={show}
              handleClose={handleClose}
            />

            <Row className="register-row">
              <span className="dont-text">
                Don’t have an account?{" "}
                <Link className="register-now-text" to="/register">
                  {" "}
                  Register now!
                </Link>
              </span>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
