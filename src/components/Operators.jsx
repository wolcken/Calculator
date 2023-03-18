import React from 'react';
import Button from 'react-bootstrap/Button';

const operations = ['+', '-', '*', '/'];

const Operators = ({ add}) => {
    return (
        <>
            {operations.map((ope, idx) => (
                <Button
                    variant="outline-warning"
                    key={idx}
                    onClick={() => add(ope)}
                >
                    {ope}
                </Button>
            ))}
        </>
    )
}

export default Operators