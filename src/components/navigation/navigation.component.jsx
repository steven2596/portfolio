import React from 'react';

import ReactDom from 'react-dom';

import './navigation.styles.scss';

import cv from '../../assets/CV.pdf';

import CustomButton from '../custom-button/custom-button.component';

const NavigationToggle = ({ navigation, setNavigation }) => {
    const onResumeClick = () => {
        window.open(cv);
    }

    return ReactDom.createPortal(
        <div className={`navigation ${navigation ? 'navigation-active' : ''}`} >
            <div className="navigation__button" onClick={() => setNavigation(!navigation)}>
                <span className="navigation__button-icon">&nbsp;</span>
            </div>
            <div className="navigation__background" ></div>
            <div className="navigation__menu-container">
                <ul className="navigation__menu">
                    <li className="navigation__item" onClick={() => setNavigation(false)}>
                        <a href="#home" className="navigation__link">Home</a>
                    </li>
                    <li className="navigation__item" onClick={() => setNavigation(false)}>
                        <a href="#about" className="navigation__link">About</a>
                    </li>
                    <li className="navigation__item" onClick={() => setNavigation(false)}>
                        <a href="#work" className="navigation__link">Work</a>
                    </li>
                    <li className="navigation__item" onClick={() => setNavigation(false)}>
                        <a href="#contact" className="navigation__link">Contact</a>
                    </li>
                    <li className="navigation__item">
                        <a href="#" className="navigation__link">
                            <CustomButton naviButton>
                                <a onClick={onResumeClick} target="_blank" rel='noopener noreferrer'>Resume</a>
                            </CustomButton>
                        </a>
                    </li>
                </ul>
            </div>
        </div>, document.getElementById('navigation')
    );
}

export default NavigationToggle;