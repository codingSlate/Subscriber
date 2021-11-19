import React from 'react';
import Container from '../templates/Container';
import Button from '../templates/Button';
import './ErrorModal.css';
const ErrorModal = (props) => {
  return (
    <div className="overlay" onClick={props.onClose}>
      <Container className="modal">
        <header className="header flex-item">
          <h2>{props.title}</h2>
        </header>
        <p className="content flex-item">{props.content}</p>
        <footer className="actions flex-item">
          <Button onClick={props.onClose}>Close</Button>
        </footer>
      </Container>
    </div>
  );
};
export default ErrorModal;
