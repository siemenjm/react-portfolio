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
                    <NavLink path={'/resume'} page={'Resume'} />
                </div>
            </div>
            <div className="footer-bottom">
                <p>Copyright 2022 Jared Siemen, All Rights Reserved | Designed and Built by <a href='https://jaredsiemen.com'>Jared Siemen</a></p>
            </div>
            {/* <MediaQuery minWidth={1025} >
                <nav className='desktop-nav'>
                    <NavLink path={'/'} page={'Home'} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                    <NavLink path={'/about-me'} page={'About Me'} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                    <NavLink path={'/projects'} page={'Projects'} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                    <NavLink path={'/client-work'} page={'Client Work'} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                    <NavLink path={'/contact'} page={'Contact'} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                    <NavLink path={'/resume'} page={'Resume'} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </nav>
            </MediaQuery>
            <MediaQuery maxWidth={1024} >
                {dropdownVisibility ? <FaRegWindowClose onClick={handleClick} /> : <FaBars onClick={handleClick} />}
                {dropdownVisibility ? displayDropdown() : <></>}
            </MediaQuery> */}
        </footer>
    );
}
