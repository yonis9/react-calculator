import React, { useContext } from 'react';
import  { CalculatorContext } from '../../providers/calculator/calculator.provider'

import './Button.scss';

const Button = ({ value, type }) => {
    const  { handleButtonClick } = useContext(CalculatorContext)
    return (
    <div className={ `button ${type}`} onClick={() =>handleButtonClick(value, type)}>
        {value}
    </div>
)}
export default Button;