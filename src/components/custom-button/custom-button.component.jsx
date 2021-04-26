import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, small, naviButton }) => {
    return (
        <div
            className=
            {
                `custom-button 
            ${small ? 'btn-small' : ''}
            ${naviButton ? 'navi-btn' : ''}`
            }
        >
            {children}
        </div>
    );
}

export default CustomButton;