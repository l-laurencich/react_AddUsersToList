import React from "react";
import  ReactDOM  from "react-dom";

import Button from "./Button";
import Card from "./Card";
// import classes from './Errormodal.module.css'
import "./ErrorModal.css";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.resetError}></div>;
};

const Modal = (props) => {
  return (
    <Card className="modal">
      <header className="header">
        <h2>{props.title}</h2>
      </header>
      <div className="content">
        <p>{props.message}</p>
      </div>
      <footer className="actions">
        <Button onClick={props.resetError}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop resetError={props.resetError} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Modal
          title={props.title}
          message={props.message}
          resetError={props.resetError}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
