import React from 'react';
import { FaBars } from 'react-icons/fa';
import MediaQuery from 'react-responsive';
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
            <MediaQuery minWidth={1025} >
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
                <FaBars />
            </MediaQuery>
        </header>
    );
}
