import React from 'react';

import './about.styles.scss';

import { ReactComponent as AboutSvg } from '../../assets/icons/about.svg';

const About = () => {
    return (
        <div className="about">
            <div className="about__content">
                <h2 className="content__heading">About Me</h2>
                <p className="content__text content__text--1">
                    Hi, my name is Aung Kaung Myat and I'm a passionate
                    Front-end Web Developer. As a developer, I build
                    products with continuous iteration to produce results
                    quickly and continuously improve products with the power
                    of technology.
                </p>
                <p className="content__text content__text--2">
                    Here're a few technologies I've been working with:
                </p>
                <div className="content__skills" >
                    <ul className="content__skill-list content__skill-list--left">
                        <li className="content__skill">
                            <span className="content__arrow-icon" >&#10146;</span>
                            <span className="content__skill-name" >HTML</span>
                        </li>
                        <li className="content__skill">
                            <span className="content__arrow-icon" >&#10146;</span>
                            <span className="content__skill-name" >CSS</span>
                        </li><li className="content__skill">
                            <span className="content__arrow-icon" >&#10146;</span>
                            <span className="content__skill-name" >Sass</span>
                        </li><li className="content__skill">
                            <span className="content__arrow-icon" >&#10146;</span>
                            <span className="content__skill-name" >Javascript</span>
                        </li>
                    </ul>
                    <ul className="content__skill-list content__skill-list--right">
                        <li className="content__skill">
                            <span className="content__arrow-icon" >&#10146;</span>
                            <span className="content__skill-name" >React</span>
                        </li>
                        <li className="content__skill">
                            <span className="content__arrow-icon" >&#10146;</span>
                            <span className="content__skill-name" >Redux</span>
                        </li><li className="content__skill">
                            <span className="content__arrow-icon" >&#10146;</span>
                            <span className="content__skill-name" >Node.js</span>
                        </li><li className="content__skill">
                            <span className="content__arrow-icon" >&#10146;</span>
                            <span className="content__skill-name" >Express</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="about__image">
                <AboutSvg className="image__svg" />
            </div>
        </div>
    )
};

export default About;

