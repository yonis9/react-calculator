import React, { createContext, useState, useEffect } from 'react';
import { operationsMap } from './operations'

export const CalculatorContext = createContext({
    value: '0',
    storedValue: '', 
    operation: null,
    message: '',
    clear: () => {},
    handleButtonClick: () => {}
})


const CalculatorProvider = ({ children }) => {
    const [value, setValue] = useState('0');
    const [storedValue, setStoredValue] = useState('');
    const [operation, setOperation] = useState(null);
    const [message, setMessage] = useState('') 

    useEffect(() => {
        const timer = setTimeout(() => {
            setMessage('')
        },3000)
        return () => clearTimeout(timer)
    },[message])
    

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

    
    const handleNumber = keyValue => {
        if (value.length === 8) return;

        value === '0' ? setValue(keyValue) : setValue(value+keyValue);
    }

    const handleOperation = keyValue => {
        setStoredValue(value || storedValue); // handle operation changes
        setOperation(keyValue);
        setValue('');
    }

    const handleDecimal = () => {
        if (!value.includes('.')) {
            !value ? setValue('0.') : setValue(value+'.');
        }
    }

    const calculate = () => {
        if (!operation || !value) return;

        const a = Number(storedValue);
        const b = Number(value);

        if (operation === '/' && b === 0) {
            setMessage('Cannot divide by 0');
            return;
        }
    

        const result = operationsMap[operation](a,b);
    
        setValue(`${result}`);
        setStoredValue('')
        setOperation(null);
    }

    const clear = () => {
        setValue('0');
        setStoredValue('');
        setOperation(null);
    }

    return (
        <CalculatorContext.Provider value={{
            value,
            storedValue,
            operation,
            message,
            handleButtonClick
        }}>
            {children}
        </CalculatorContext.Provider>
    )
}


export default CalculatorProvider;