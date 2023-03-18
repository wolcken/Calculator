import React from 'react';
import Button from 'react-bootstrap/Button';

const Exponents = ({ radical, cuadrado, cubo, base10, baseE, exp, par_izq, par_der }) => {
    return (
        <>
            <Button variant="outline-info" onClick={exp}>^</Button>
            <Button variant="outline-info" onClick={par_izq}>(</Button>
            <Button variant="outline-info" onClick={par_der}>)</Button>
            <Button variant="outline-info" onClick={radical}>√</Button>
            <Button variant="outline-info" onClick={cuadrado}>x²</Button>
            <Button variant="outline-info" onClick={cubo}>x³</Button>
            <Button variant="outline-info" onClick={base10}>10*</Button>
            <Button variant="outline-info" onClick={baseE}>e*</Button>
        </>
    )
}

export default Exponents
