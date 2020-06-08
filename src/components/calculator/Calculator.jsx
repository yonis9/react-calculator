import React, { useContext } from 'react';
import { CalculatorContext } from '../../providers/calculator/calculator.provider'

import './Calculator.scss';
import Screen from '../screen/Screen';
import ButtonLayout from '../buttons-layout/ButtonsLayout';

const Calculator = () => {
    const { 
        clear,
        handleOperation,
        handleNumber,
        calculate,
        handleDecimal
    } = useContext(CalculatorContext)


    const handleButtonClick = (keyValue, type) => {
        switch (type) {
            case 'number': {
                handleNumber(keyValue)
                break;
            }
            case 'operation': {
                handleOperation(keyValue)
                break;
            }
            case 'decimal': {
                handleDecimal();
                break;
            }

            case 'equal': {
                calculate();
                break;
             }

             case 'ac': {
                clear()
                break;
             }
            default:
                return
        }
    }
    return (
        <div className='calculator'>
                <Screen />
                <ButtonLayout handleButtonClick={handleButtonClick} />
        </div>
)
}

export default Calculator;