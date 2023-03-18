import React from 'react';
import Button from 'react-bootstrap/Button';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const Numbers = ({ add }) => {
    return (
        <>
            {numbers.map((num, idx) => (
                <Button
                    className={`b${num}`}
                    variant="outline-primary"
                    key={idx}
                    onClick={() => add(num)}
                >
                    {num}
                </Button>
            ))}
        </>
    )
}

export default Numbers
