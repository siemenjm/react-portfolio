import React from 'react';
import { FaBars, FaRegWindowClose } from 'react-icons/fa';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/Color-logo-no-background.png';
import resume from '../documents/resume.pdf';
import NavLink from './NavLink';
import { useState } from 'react';

const pages = [
    { title: 'Home', path: '/' },
    { title: 'About Me', path: '/about-me' },
    { title: 'Projects', path: '/projects' },
    { title: 'Client Work', path: '/client-work' },
    { title: 'Contact', path: '/contact' },
];

export default function Header({ currentPage, setCurrentPage }) {
    const [dropdownVisibility, setDropdownVisibility] = useState(false);

    const navLinks = pages.map((page) => {
        return <NavLink path={page.path} pageTitle={page.title} currentPage={currentPage} setCurrentPage={setCurrentPage} key={page.title} />
    });

    let dropdownStyle = '';
    dropdownVisibility ? dropdownStyle = 'active-dropdown' : dropdownStyle = '';

    function handleClick(e) {
        dropdownVisibility ? setDropdownVisibility(false) : setDropdownVisibility(true);
    }

    return (
        <header>
            <Link to={'/'}>
                <img src={logo} alt="Jared Siemen website logo" className='site-logo' />
            </Link>
            <MediaQuery minWidth={1025}>
                <nav className='desktop-nav'>
                    {navLinks}
                    <div className="button-wrapper">
                        <div className="inner-button-wrapper">
                            <a href={resume} target='blank' className="nav-link">Resume</a>
                        </div>
                    </div>
                </nav>
            </MediaQuery>
            <MediaQuery maxWidth={1024}>
                {dropdownVisibility ? <FaRegWindowClose onClick={handleClick} className={'menu-icon'} /> : <FaBars onClick={handleClick} className={'menu-icon'} />}
                <nav onClick={handleClick} className={`responsive-nav ${dropdownStyle}`} >
                    {dropdownVisibility ? navLinks  : <></>}
                    {dropdownVisibility ? <a href={resume} target='blank' className="nav-link">Resume</a> : <></>}
                </nav>
            </MediaQuery>
        </header>
    );
}
