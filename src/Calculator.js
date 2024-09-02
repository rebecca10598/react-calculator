// This component will contain the structure and logic of our calculator

import React, { useState, useEffect, useCallback } from "react";
import { evaluate } from 'mathjs';
import './Calculator.css';

const Calculator = () => {
    const [input, setInput] = useState('');

    const handleClick = useCallback((value) => {
        setInput((prevInput) => prevInput + value);
    }, []);

    const handleClear = useCallback(() => {
        setInput('');
    }, []);

    const handleEqual = useCallback(() => {
        try {
            setInput(evaluate(input).toString());
        } 
        catch {
            setInput('Error');
        }
    }, [input]);

    const handleKeyPress = useCallback((event) => {
        const { key } = event;
        if (/^[0-9+\-*/.]$/.test(key)) {
            handleClick(key);
        } 
        else if (key === 'Enter') {
            handleEqual();
        } 
        else if (key === 'Backspace') {
            setInput((prevInput) => prevInput.slice(0, -1));
        } 
        else if (key === 'Escape') {
            handleClear();
        }
    }, [handleClick, handleEqual, handleClear]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [handleKeyPress]);

    return (
        <div className="calculator">
            <div className="display">{input}</div>
            <div className="buttons">
                <button onClick={() => handleClick('1')}>1</button>
                <button onClick={() => handleClick('2')}>2</button>
                <button onClick={() => handleClick('3')}>3</button>
                <button onClick={() => handleClick('+')}>+</button>
                <button onClick={() => handleClick('4')}>4</button>
                <button onClick={() => handleClick('5')}>5</button>
                <button onClick={() => handleClick('6')}>6</button>
                <button onClick={() => handleClick('-')}>-</button>
                <button onClick={() => handleClick('7')}>7</button>
                <button onClick={() => handleClick('8')}>8</button>
                <button onClick={() => handleClick('9')}>9</button>
                <button onClick={() => handleClick('*')}>*</button>
                <button onClick={handleClear}>C</button>
                <button onClick={() => handleClick('0')}>0</button>
                <button onClick={handleEqual}>=</button>
                <button onClick={() => handleClick('/')}>/</button>
            </div>
        </div>
    );
};

export default Calculator;
