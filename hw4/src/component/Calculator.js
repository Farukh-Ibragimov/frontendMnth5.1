import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inputNumber, inputOperator, calculate, clear } from '../store/calculatorSlice';
import "./style.css";

const Equals = ({ onClick }) => {
    return <button className="btn btn-success letter-equals" onClick={onClick}>=</button>;
};

const Clear = ({ onClick }) => {
    return <button className="btn btn-danger letter-clear" onClick={onClick}>C</button>;
};

const Operations = ({ onClick }) => {
    const operations = [
        { symbol: "+", letter: "add" },
        { symbol: "-", letter: "subtract" },
        { symbol: "×", letter: "multiply" },
        { symbol: "÷", letter: "divide" }
    ];

    return (
        <>
            {operations.map(({ letter, symbol }) => (
                <button key={letter} className={`btn btn-warning letter-${letter}`} onClick={() => onClick(symbol)}>
                    {symbol}
                </button>
            ))}
        </>
    );
};

const Numbers = ({ onClick }) => {
    const numbers = [
        { number: "0", letter: "zero" },
        { number: "1", letter: "one" },
        { number: "2", letter: "two" },
        { number: "3", letter: "three" },
        { number: "4", letter: "four" },
        { number: "5", letter: "five" },
        { number: "6", letter: "six" },
        { number: "7", letter: "seven" },
        { number: "8", letter: "eight" },
        { number: "9", letter: "nine" },
        { number: ".", letter: "decimal" }
    ];

    return (
        <>
            {numbers.map(({ letter, number }) => (
                <button key={letter} className={`btn btn-secondary letter-${letter}`} onClick={() => onClick(number)}>
                    {number}
                </button>
            ))}
        </>
    );
};

const Display = ({ value }) => {
    return <div className="display">{value}</div>;
};

const Calculator = () => {
    const dispatch = useDispatch();
    const displayValue = useSelector((state) => state.calculator.displayValue);

    return (
        <div className="calculator">
            <Display value={displayValue} />
            <div className="buttons">
                <Equals onClick={() => dispatch(calculate())} />
                <Clear onClick={() => dispatch(clear())} />
                <Numbers onClick={(number) => dispatch(inputNumber(number))} />
                <Operations onClick={(operator) => dispatch(inputOperator(operator))} />
            </div>
        </div>
    );
};

export default Calculator;
