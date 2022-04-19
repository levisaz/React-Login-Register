//React
import React from "react";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

//Assets
import "../styles/Login.scss";

import ustLogo from "../assets/ustLogo.png";
import ustCICSLogo from "../assets/ustCICSLogo.png";

import ConfirmModal from "./ConfirmModal";
const Login = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container fluid className="login">
        <Row>
          {/* C1: UST Background */}
          <Col className="column1-ust" sm={12}>
            <img className="ust-logo" src={ustLogo} alt="ustLogo" width={180} />
            <h5 className="pontifical-text">
              Pontifical and Royal <br /> The University of Santo Tomas
            </h5>
            <h2 className="thomasian-text">Thomasian Graduates</h2>
            <br />
            <Link className="logout-text" to="/">
              {" "}
              <i class="fa-solid fa-arrow-right-from-bracket"></i> Logout
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;