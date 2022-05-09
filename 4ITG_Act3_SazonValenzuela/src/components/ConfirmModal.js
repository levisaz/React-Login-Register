import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

//Assets
import "../styles/Login.scss";

const ConfirmModal = ({ show, handleClose }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>Welcome to Thomasian Graduates! 🎓</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          {/* onClick={handleClose} */}
          <Button variant="primary">
            {" "}
            <Link className="portal-text" to="/portal">
              {" "}
              Confirm
            </Link>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ConfirmModal;
