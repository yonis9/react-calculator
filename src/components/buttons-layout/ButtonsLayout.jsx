import React from'react';

import Button from '../button/Button';

import BUTTONS_DATA from  './buttons-data';
import './ButtonsLayout.scss';

const ButtonLayout = () => {
    return (
        <div className='buttons-layout'>
            {
                BUTTONS_DATA.map(item =>  <Button key={item.value} {...item} />)
            }
        </div>
    )
}

export default ButtonLayout;