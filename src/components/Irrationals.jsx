import React from 'react';
import Button from 'react-bootstrap/Button';

const e = [2.718281]
const pi = [3.141592]

const Irrationals = ({ add }) => {
  return (
    <>
      <Button className={'be'} variant="outline-primary" onClick={() => add(pi)} >π</Button>
      <Button className={'bpi'} variant="outline-primary" onClick={() => add(e)} >e</Button>
    </>
  )
}

export default Irrationals
