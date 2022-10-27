import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/Color-logo-no-background.png';

export default function Header() {
    return (
        <header>
            <Link to={'/'}>
                <img src={logo} alt="Jared Siemen website logo" className='site-logo' />
            </Link>
            <nav>
                <Link to={'/'} className={'nav-link'} >Home</Link>
                <Link to={'/about-me'} className={'nav-link'} >About Me</Link>
                <Link to={'/'} className={'nav-link'} >Projects</Link>
                <Link to={'/'} className={'nav-link'} >Client Work</Link>
                <Link to={'/'} className={'nav-link'} >Contact</Link>
                <Link to={'/'} className={'nav-link'} >Resume</Link>
            </nav>
        </header>
    );
}
