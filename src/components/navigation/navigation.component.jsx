import React from 'react';

import ReactDom from 'react-dom';

import './navigation.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

const NavigationToggle = ({ navigation, setNavigation }) => {
    return ReactDom.createPortal(
        <div className={`navigation ${navigation ? 'navigation-active' : ''}`} >
            <div className="navigation__button" onClick={() => setNavigation(!navigation)}>
                <span className="navigation__button-icon">&nbsp;</span>
            </div>
            <div className="navigation__background" ></div>
            <div className="navigation__menu-container">
                <ul className="navigation__menu">
                    <li className="navigation__item">
                        <a href="#" className="navigation__link">Home</a>
                    </li>
                    <li className="navigation__item">
                        <a href="#" className="navigation__link">About</a>
                    </li>
                    <li className="navigation__item">
                        <a href="#" className="navigation__link">Work</a>
                    </li>
                    <li className="navigation__item">
                        <a href="#" className="navigation__link">Contact</a>
                    </li>
                    <li className="navigation__item">
                        <a href="#" className="navigation__link">
                            <CustomButton naviButton>Resume</CustomButton>
                        </a>
                    </li>
                </ul>
            </div>
        </div>, document.getElementById('navigation')
    );
}

export default NavigationToggle;