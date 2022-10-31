import React from 'react';
import { FaBars, FaRegWindowClose } from 'react-icons/fa';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/Color-logo-no-background.png';
import NavLink from './NavLink';
import { useState } from 'react';
import HeaderDropdown from './HeaderDropdown';

const pages = [
    { title: 'Home', path: '/' },
    { title: 'About Me', path: '/about-me' },
    { title: 'Contact', path: '/contact' },
];

export default function Header() {
    const [currentPage, setCurrentPage] = useState('');

    const navLinks = pages.map((page) => {
        return <NavLink path={page.path} page={page.title} currentPage={currentPage} setCurrentPage={setCurrentPage} key={page.title} />
    });

    return (
        <header>
            <Link to={'/'}>
                <img src={logo} alt="Jared Siemen website logo" className='site-logo' />
            </Link>
            <nav className='desktop-nav'>
                {navLinks}
            </nav>
        </header>
    );
    // const [currentPage, setCurrentPage] = useState('');
    // const [dropdownVisibility, setDropdownVisibility] = useState(false);

    // function handleClick(e) {
    //     dropdownVisibility ? setDropdownVisibility(false) : setDropdownVisibility(true);
    // }

    // return (
    //     <header>
    //         <Link to={'/'} >
    //             <img src={logo} alt="Jared Siemen website logo" className='site-logo' />
    //         </Link>
    //         <MediaQuery minWidth={1025} >
    //             <nav className='desktop-nav'>
    //                 <NavLink path={'/'} page={'Home'} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    //                 <NavLink path={'/about-me'} page={'About Me'} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    //                 <NavLink path={'/projects'} page={'Projects'} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    //                 <NavLink path={'/client-work'} page={'Client Work'} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    //                 <NavLink path={'/contact'} page={'Contact'} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    //                 <div className="button-wrapper">
    //                     <NavLink path={'/resume'} page={'Resume'} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    //                 </div>
    //             </nav>
    //         </MediaQuery>
    //         <MediaQuery maxWidth={1024} >
    //             {dropdownVisibility ? <FaRegWindowClose onClick={handleClick} className={'menu-icon'} /> : <FaBars onClick={handleClick} className={'menu-icon'} />}
    //             <HeaderDropdown dropdownVisibility={dropdownVisibility} setDropdownVisibility={setDropdownVisibility} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    //         </MediaQuery>
    //     </header>
    // );
}
