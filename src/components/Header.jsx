import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/Color-logo-no-background.png';
import NavLink from './NavLink';

export default function Header({ currentPage, setCurrentPage }) {
    return (
        <header>
            <Link to={'/'} >
                <img src={logo} alt="Jared Siemen website logo" className='site-logo' />
            </Link>
            <nav>
                <NavLink path={'/'} page={'Home'} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                <NavLink path={'/about-me'} page={'About Me'} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                {/* <Link to={'/'} onClick={handleClick} className={`nav-link`} >Home</Link>
                <Link to={'/about-me'} onClick={handleClick} className={'nav-link'} >About Me</Link>
                <Link to={'/'} className={'nav-link'} >Projects</Link>
                <Link to={'/'} className={'nav-link'} >Client Work</Link>
                <Link to={'/'} className={'nav-link'} >Contact</Link>
                <Link to={'/'} className={'nav-link'} >Resume</Link> */}
            </nav>
        </header>
    );
}
