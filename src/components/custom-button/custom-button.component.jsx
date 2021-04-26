import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, small }) => {
    return (
        <div className={`custom-button ${small ? 'btn-small' : ''}`} >
            {children}
        </div>
    );
}

export default CustomButton;