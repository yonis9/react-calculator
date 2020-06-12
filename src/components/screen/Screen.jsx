import React, { useContext }from 'react';
import { CalculatorContext } from '../../providers/calculator/calculator.provider'

import './Screen.scss';

const Screen = () => {
    const { value, operation, storedValue, message } = useContext(CalculatorContext);

    return (
        <div className='screen'>
            
            {
            message ?
            <div className='history'> {message} </div> 
            : operation ?
            <div className='history'>{storedValue+operation+value}</div> :
            <div className='history'>{value}</div>
            }
            
            <div className={`main-screen ${value.length > 13 || storedValue.length > 13 ? 'small' : ''}`} >{value || storedValue}</div>
        </div>
    )
}

export default Screen;