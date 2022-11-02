import React from 'react';
import '../styles/HeroSection.css';

export default function HomePage() {
    return (
        <div className='page'>
            <section className="hero-section">
                <h1 className="hidden">Jared Siemen</h1>
                <h2 className='section-header loaded color-accent'>Hello</h2>
                <h2>I'm Jared Siemen.</h2>
                <h2 className='color-light'>I design and develop full stack websites.</h2>
                <p>I’m a full stack software developer with a diverse skillset that ranges from building single page applications using React and Express.js, to quickly churning out a marketing site for a small business, to designing a website interface from the ground up using Adobe Xd. Currently freelancing, but looking to join a team.</p>
            </section>
        </div>
    );
}
