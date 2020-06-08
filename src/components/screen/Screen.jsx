import React, { useContext }from 'react';
import { CalculatorContext } from '../../providers/calculator/calculator.provider'

import './Screen.scss';

const Screen = () => {
    const { value, operation, storedValue } = useContext(CalculatorContext)
    return (
        <div className='screen'>
            <div className='history'>{storedValue}{operation}{value}</div>
            <div className={`main-screen ${value.length > 13 || storedValue.length > 13 ? 'small' : ''}`} >{value || storedValue}</div>
        </div>
    )
}

export default Screen;