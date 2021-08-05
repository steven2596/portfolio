import React from 'react';

import './social-list.styles.scss';
import sprite from '../../assets/icons/sprite.svg';

const SocialList = () => {
    return (
        <ul className="social">
            <li className="social__item">
                <a className="social__link" href="https://github.com/steven2596" target="_blank">
                    <svg className="social__icon">
                        <use href={sprite + '#icon-github'} />
                    </svg>
                </a>
            </li>
            <li className="social__item">
                <a className="social__link" href="https://www.facebook.com/aungkaungmyat25" target="_blank">
                    <svg className="social__icon">
                        <use href={sprite + '#icon-facebook'} />
                    </svg>
                </a>
            </li>
            <li className="social__item">
                <a className="social__link" href="https://www.instagram.com/akm_steven/" target="_blank">
                    <svg className="social__icon">
                        <use href={sprite + '#icon-instagram'} />
                    </svg>
                </a>
            </li>
            <li className="social__item">
                <a className="social__link" href="#" target="_blank">
                    <svg className="social__icon">
                        <use href={sprite + '#icon-linkedin'} />
                    </svg>
                </a>
            </li>
            <li>
                <span className="social__line"></span>
            </li>
        </ul>
    )
};

export default SocialList;

