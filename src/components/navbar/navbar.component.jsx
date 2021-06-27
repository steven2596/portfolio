import React, { useState } from 'react';

import './navbar.styles.scss';

import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import CustomButton from '../../components/custom-button/custom-button.component';
import NavigationToggle from '../navigation/navigation.component';
import cv from '../../assets/CV.pdf';


const Navbar = () => {
    const [navigation, setNavigation] = useState(false);

    const onResumeClick = () => {
        window.open(cv);
    }

    return (
        <nav className="navbar" id="home">
            <Logo className="navbar__logo" />
            <ul className="navbar__menu">
                <li className="navbar__item">
                    <a href="#home" className="navbar__link">Home</a>
                </li>
                <li className="navbar__item">
                    <a href="#about" className="navbar__link">About</a>
                </li>
                <li className="navbar__item">
                    <a href="#work" className="navbar__link">Work</a>
                </li>
                <li className="navbar__item">
                    <a href="#contact" className="navbar__link">Contact</a>
                </li>
                <li className="navbar__item" >
                    <CustomButton small>
                        <a onClick={onResumeClick} target="_blank" rel='noopener noreferrer'>Resume</a>
                    </CustomButton>
                </li>
            </ul>
            <NavigationToggle navigation={navigation} setNavigation={setNavigation} />
        </nav>
    );
}

export default Navbar;