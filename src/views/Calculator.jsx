import React, { useState } from 'react';
import '../styles/calculator.css'
import { evaluate } from 'mathjs';
import Screen from '../components/Screen';
import Numbers from '../components/Numbers';
import Operators from '../components/Operators';
import Scientific from '../components/Scientific';
import Equal from '../components/Equal';
import Exponents from '../components/Exponents';
import Irrationals from '../components/Irrationals';

import Alert from '../components/Alert';

const Calculator = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const [messag, setMessag] = useState('');

    const [input, setInput] = useState('')

    const add = (val) => {
        setInput(input + val)
    }

    //Equal
    const result = () => {
        try {
            if (input) {
                setInput(evaluate(input))
            } else {
                setShow(true)
                setMessag('You must enter data')
            }
        } catch (error) {
            setShow(true)
            setMessag('Data cannot be evaluated')
            setInput('')
        }
    }

    const clear = () => {
        setInput('')
    }

    //Exponents
    const radical = () => {
        setInput(`sqrt(${input})`)
    }

    const cuadrado = () => {
        setInput(`square(${input})`)
    }

    const cubo = () => {
        setInput(`cube(${input})`)
    }

    const base10 = () => {
        setInput(`10^(${input})`)
    }

    const baseE = () => {
        setInput(`e^(${input})`)
    }

    const exp = () => {
        setInput(`${input}^`)
    }

    const par_izq = () => {
        setInput(input + '(')
    }

    const par_der = () => {
        setInput(input + ')')
    }

    //Scientific
    const sen = () => {
        setInput(`sin(${input} deg)`)
    }

    const cos = () => {
        setInput(`cos(${input} deg)`)
    }

    const tan = () => {
        setInput(`tan(${input} deg)`)
    }

    const sec = () => {
        setInput(`sec(${input} deg)`)
    }

    const csc = () => {
        setInput(`csc(${input} deg)`)
    }

    const cot = () => {
        setInput(`cot(${input} deg)`)
    }

    const log = () => {
        setInput(`log(${input})`)
    }

    return (
        <div className='calculator'>
            <h1 className='title'>Calculator</h1>
            <Screen input={input} />
            <div className="buttons">
                <Numbers add={add} />
                <Irrationals add={add} />
                <Operators add={add} />
                <Exponents radical={radical} cuadrado={cuadrado} cubo={cubo} base10={base10} baseE={baseE} exp={exp} par_izq={par_izq} par_der={par_der} />
                <Scientific sen={sen} cos={cos} tan={tan} sec={sec} csc={csc} cot={cot} log={log} par_der={par_der} />
                <Equal result={result} clear={clear} />
            </div>
            <p>@Wolcken by Alfredo Ramos</p>
            <Alert show={show} handleClose={handleClose} messag={messag} />
        </div>
    )
}

export default Calculator
