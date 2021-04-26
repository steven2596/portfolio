import React from 'react';

import './navbar.styles.scss';

import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import CustomButton from '../../components/custom-button/custom-button.component';


const Navbar = () => {
    return (
        <nav className="navbar">
            <Logo className="navbar__logo" />
            <ul className="navbar__menu">
                <li className="navbar__item">
                    <a href="#" className="navbar__link">Home</a>
                </li>
                <li className="navbar__item">
                    <a href="#" className="navbar__link">About</a>
                </li>
                <li className="navbar__item">
                    <a href="#" className="navbar__link">Work</a>
                </li>
                <li className="navbar__item">
                    <a href="#" className="navbar__link">Contact</a>
                </li>
                <li className="navbar__item" >
                    <CustomButton small >Resume</CustomButton>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;