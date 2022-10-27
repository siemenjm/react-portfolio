import React from 'react';
import { Link } from 'react-router-dom';

export default function NavLink({ path, page, currentPage, setCurrentPage }) {
    let style = '';
    if (currentPage === path) {
        style = 'active';
    }

    function handleClick(e) {
        setCurrentPage(path);
    }

    return (
        <Link to={path} onClick={handleClick} className={`nav-link ${style}`} >{page}</Link>
    );
}
