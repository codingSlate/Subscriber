import React, { Fragment } from 'react';
import Container from '../templates/Container';
import Button from '../templates/Button';
import './ErrorModal.css';

import ReactDOM from 'react-dom';

const Overlay = (props) => {
  return <div className="overlay" onClick={props.onClose}></div>;
};

const Modal = (props) => {
  return (
    <Container className="modal">
      <header className="header flex-item">
        <h2>{props.title}</h2>
      </header>
      <p className="content flex-item">{props.content}</p>
      <footer className="actions flex-item">
        <Button onClick={props.onClose}>Close</Button>
      </footer>
    </Container>
  );
};

const ErrorModal = (props) => {
  return (
    // <div className="overlay" onClick={props.onClose}>
    //   <Container className="modal">
    //     <header className="header flex-item">
    //       <h2>{props.title}</h2>
    //     </header>
    //     <p className="content flex-item">{props.content}</p>
    //     <footer className="actions flex-item">
    //       <Button onClick={props.onClose}>Close</Button>
    //     </footer>
    //   </Container>
    // </div>

    // Use of Fragment
    <Fragment>
      
      React.DOM.createPortal(
      <Overlay onClick={props.onClose}></Overlay>,
      {document.getElementById('overlay-root')}
      ), 
      React.DOM.createPortal(
      <Modal
      title={props.title} 
      content={props.content} 
      onClick={props.onClose}
      ></Modal>, {document.getElementById('modal-root')})

    </Fragment>
  );
};
export default ErrorModal;
