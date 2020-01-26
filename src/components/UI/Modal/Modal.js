import React from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => (
    <React.Fragment>
        <Backdrop show={props.purchasing} clicked={props.modalClosed} />
        <div 
            style={{
                transform: props.purchasing ? "translateY(0)" : "translateY(-100vh)",
                opactity: props.purchasing ? 1 : 0
            }}
            className={classes.Modal}
        >
            {props.children}
        </div>
    </React.Fragment>
);

export default Modal;