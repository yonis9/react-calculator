import React from 'react';

import './Calculator.scss';
import Screen from '../screen/Screen';
import ButtonLayout from '../buttons-layout/ButtonsLayout';

const Calculator = () => (
        <div className='calculator'>
                <Screen />
                <ButtonLayout />
        </div>
)


export default Calculator;