import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

import './header.styles.scss';

const Header = () => {
    return (
        <header className="header" >
            <div className="header__text-box">
                <span className="header__text">Hi, my name is</span>
                <h1 className="header__heading header__heading--1">Aung Kaung Myat.</h1>
                <h1 className="header__heading header__heading--2">I am a Web Developer.</h1>
                <CustomButton>View My Work</CustomButton>
            </div>
        </header>
    )
};

export default Header;