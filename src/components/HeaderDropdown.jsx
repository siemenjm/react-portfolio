import React from 'react';
import NavLink from './NavLink';

export default function HeaderDropdown({ dropdownVisibility, currentPage, setCurrentPage }) {
    let active = '';
    if (dropdownVisibility) {
        active = 'active-dropdown';
    }

    return (
        <nav className={`responsive-dropdown ${active}`}>
            <NavLink path={'/'} page={'Home'} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <NavLink path={'/about-me'} page={'About Me'} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <NavLink path={'/projects'} page={'Projects'} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <NavLink path={'/client-work'} page={'Client Work'} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <NavLink path={'/contact'} page={'Contact'} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <NavLink path={'/resume'} page={'Resume'} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </nav>
    );
}
