import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import './Footer.scss';

const Footer = () => (
    <div className='footer'>
        <p>
            Made by Yoni Sisso
            <a href='https://github.com/yonis9' target='_blank' >
                <FontAwesomeIcon icon={faGithub} />
            </a> 
        </p>
    </div>
)

export default Footer;