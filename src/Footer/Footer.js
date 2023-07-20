import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>

            <div className="footer__container container">
                <h1 className="footer__title">Sourov</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className='footer__link'>About</a>
                        <a href="#services" className='footer__link'>Services</a>
                        <a href="#contact" className='footer__link'>Contact</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href=" " className="home__social-icon" target='_blank'><i class="uil uil-instagram"></i></a>
                    <a href=" " className="home__social-icon" target='_blank'><i class="uil uil-github-alt"></i></a>
                    <a href=" " className="home__social-icon" target='_blank'><i class="uil uil-linkedin-alt"></i></a>
                </div>
                <span className="footer__copy">&#169; Sourov. All rights reserved </span>
            </div>
        </footer>
    );
};

export default Footer;