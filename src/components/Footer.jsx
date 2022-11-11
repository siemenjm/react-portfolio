import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import logo from '../assets/Color-logo-no-background.png';
import resume from '../documents/resume.pdf';

export default function Footer() {
    return (
        <footer>
            <div className="footer-top">
                <p>contact@jaredsiemen.com</p>
                <Link to={'/'} >
                    <img src={logo} alt="Jared Siemen website logo" className='site-logo' />
                </Link>
                <div className="button-wrapper">
                    <div className="inner-button-wrapper">
                        <a href={resume} target='blank' className="nav-link">Resume</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Copyright 2022 Jared Siemen, All Rights Reserved | Designed and Built by <Link to={'/'} >Jared Siemen</Link></p>
            </div>
        </footer>
    );
}
