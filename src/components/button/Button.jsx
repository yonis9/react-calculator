import React from 'react';

import './Button.scss';

const Button = ({ value, type, handleButtonClick }) => (
    <div className={ `button ${type}`} onClick={() =>handleButtonClick(value, type)}>
        {value}
    </div>
)
export default Button;