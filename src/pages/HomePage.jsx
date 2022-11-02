import React, { useEffect, useState } from 'react';
import '../styles/HeroSection.css';

export default function HomePage() {
    return (
        <div className='page'>
            <section className="hero-section">
                <h1 className="hidden">Jared Siemen</h1>
                <div className="section-header-wrapper">
                    <h2 className={`header-letter first-letter color-accent`}>H</h2>
                    <h2 className='header-letter second-letter color-accent'>e</h2>
                    <h2 className='header-letter third-letter color-accent'>l</h2>
                    <h2 className='header-letter fourth-letter color-accent'>l</h2>
                    <h2 className='header-letter fifth-letter color-accent'>o</h2>
                </div>
                <h2>I'm Jared Siemen.</h2>
                <h2 className='color-light'>I design and develop full stack websites.</h2>
                <p>I’m a full stack software developer with a diverse skillset that ranges from building single page applications using React and Express.js, to quickly churning out a marketing site for a small business, to designing a website interface from the ground up using Adobe Xd. Currently freelancing, but looking to join a team.</p>
            </section>
        </div>
    );
}
