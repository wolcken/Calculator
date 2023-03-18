import React from 'react';
import Modal from 'react-bootstrap/Modal';
import angry from '../utils/angry256.gif'

const Alert = ({ show, handleClose, messag }) => {
    return (
        <>
            <Modal show={show} onHide={handleClose} centered >
                <Modal.Body>
                    <div className="alert" onClick={handleClose} >
                        <h1>{messag}</h1>
                        <img src={angry} alt="gif" />
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Alert
