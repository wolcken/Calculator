import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const Screen = ({ input }) => {
    return (
        <div className="result">
            <FloatingLabel
                controlId="floatingInput"
                label="Operations"
                className="mb-3"
            >
                <Form.Control type="text" size='lg' disabled defaultValue={input} />
            </FloatingLabel>
        </div>
    )
}

export default Screen
