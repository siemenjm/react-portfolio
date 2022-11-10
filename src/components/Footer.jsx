import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import logo from '../assets/Color-logo-no-background.png';
import NavLink from './NavLink';

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
                        <NavLink path={'/resume'} pageTitle={'Resume'} />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Copyright 2022 Jared Siemen, All Rights Reserved | Designed and Built by <a href='https://jaredsiemen.com'>Jared Siemen</a></p>
            </div>
        </footer>
    );
}
