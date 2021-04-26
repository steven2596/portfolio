import React from 'react';

import './contact.styles.scss';

import { ReactComponent as ContactSvg } from '../../assets/icons/contact.svg';


const Contact = () => {
    return (
        <div className="contact" >
            <div className="contact__content" >
                <h2 className="content__heading">Contact</h2>
                <p className="content__text" >
                    Whether it's a job opportunity or project,
                    my inbox is always open. If you have a question
                    or just want to say hi, feel free to contact me.
                </p>
                <div className="content__group content__group--1"  >
                    <h3 className="group__heading">Email</h3>
                    <p className="group__text" >aungkaungmyat2596@gmail.com</p>
                </div>
                <div className="content__group" >
                    <h3 className="group__heading">Phone</h3>
                    <p className="group__text" >+95 9794 135 437</p>
                </div>
            </div>
            <div className="contact__img">
                <ContactSvg className="img__svg" />
            </div>
        </div>
    )
};

export default Contact;

