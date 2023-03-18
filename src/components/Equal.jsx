import React from 'react';
import Button from 'react-bootstrap/Button';

const Equal = ({ result, clear }) => {
    return (
        <>
            <Button className={'bclear'} variant="outline-secondary" onClick={clear}>CE</Button>
            <Button className={'bresult'} variant="outline-success" onClick={result}>=</Button>
        </>
    )
}

export default Equal
