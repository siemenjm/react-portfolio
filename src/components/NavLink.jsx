import React from 'react';
import { Link } from 'react-router-dom';

export default function NavLink({ path, pageTitle, currentPage, setCurrentPage }) {
    let linkStyle = '';
    if (currentPage === path) {
        linkStyle = 'active-link';
    }
    
    function handleClick(e) {
        setCurrentPage(path);
    }

    return (
        <Link to={path} onClick={handleClick} className={`nav-link ${linkStyle}`} >{pageTitle}</Link>
    );
}
