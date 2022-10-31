import React from 'react';
import { FaBars, FaRegWindowClose } from 'react-icons/fa';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/Color-logo-no-background.png';
import NavLink from './NavLink';
import { useState } from 'react';

const pages = [
    { title: 'Home', path: '/' },
    { title: 'About Me', path: '/about-me' },
    { title: 'Projects', path: '/projects' },
    { title: 'Client Work', path: '/client-work' },
    { title: 'Contact', path: '/contact' },
];

export default function Header() {
    const [currentPage, setCurrentPage] = useState('');
    const [dropdownVisibility, setDropdownVisibility] = useState(false);

    const navLinks = pages.map((page) => {
        return <NavLink path={page.path} page={page.title} currentPage={currentPage} setCurrentPage={setCurrentPage} key={page.title} />
    });

    let dropdownStyle = '';
    dropdownVisibility ? dropdownStyle = 'active-dropdown' : dropdownStyle = '';

    function handleClick(e) {
        console.log('clicked');
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
                        <NavLink path={'/resume'} page={'Resume'} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                    </div>
                </nav>
            </MediaQuery>
            <MediaQuery maxWidth={1024}>
                {dropdownVisibility ? <FaRegWindowClose onClick={handleClick} className={'menu-icon'} /> : <FaBars onClick={handleClick} className={'menu-icon'} />}
                <nav onClick={handleClick} className={`responsive-dropdown ${dropdownStyle}`} >
                    {dropdownVisibility ? navLinks  : <></>}
                    {dropdownVisibility ? <NavLink path={'/resume'} page={'Resume'} currentPage={currentPage} setCurrentPage={setCurrentPage} /> : <></>}
                </nav>
            </MediaQuery>
        </header>
    );
}
