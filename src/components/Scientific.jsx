import React from 'react';
import Button from 'react-bootstrap/Button';

const Scientific = ({ sen, cos, tan, sec, csc, cot ,log, pi }) => {
    return (
        <>
            <Button variant="outline-danger" onClick={sen}>sen</Button>
            <Button variant="outline-danger" onClick={cos}>cos</Button>
            <Button variant="outline-danger" onClick={tan}>tan</Button>
            <Button variant="outline-danger" onClick={sec}>sec</Button>
            <Button variant="outline-danger" onClick={csc}>csc</Button>
            <Button variant="outline-danger" onClick={cot}>cot</Button>
            <Button variant="outline-danger" onClick={log}>ln</Button>
            <Button variant="outline-danger" onClick={pi}>π</Button>
        </>
    )
}

export default Scientific
