import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            // site logo
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/'}>About Me</Link>
                <Link to={'/'}>Projects</Link>
                <Link to={'/'}>Client Work</Link>
                <Link to={'/'}>Contact</Link>
            </nav>
        </header>
    );
}
