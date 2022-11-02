import React from 'react';
import '../styles/HeroSection.css';
import '../styles/Section.css';
import NavLink from '../components/NavLink';

export default function HomePage({ currentPage, setCurrentPage }) {
    return (
        <div className='page'>
            <section className="hero-section">
                <h1 className="hidden">Jared Siemen</h1>
                <div className="section-header-wrapper">
                    <h2 className='header-letter first-letter color-accent'>H</h2>
                    <h2 className='header-letter second-letter color-accent'>e</h2>
                    <h2 className='header-letter third-letter color-accent'>l</h2>
                    <h2 className='header-letter fourth-letter color-accent'>l</h2>
                    <h2 className='header-letter fifth-letter color-accent'>o</h2>
                </div>
                <h2>I'm Jared Siemen.</h2>
                <h2 className='color-light'>I design and develop full stack websites.</h2>
                <p>I’m a full stack software developer with a diverse skillset that ranges from building single page applications using React and Express.js, to quickly churning out a marketing site for a small business, to designing a website interface from the ground up using Adobe Xd. Currently freelancing, but looking to join a team.</p>
                <div className="button-wrapper">
                    <NavLink path={'/contact'} pageTitle={'Let\'s Connect'} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </div>
            </section>
            <section className="about-me-section">
                <div className="section-header-wrapper">
                    <h2 className='header-letter first-letter color-accent'>A</h2>
                    <h2 className='header-letter second-letter color-accent'>b</h2>
                    <h2 className='header-letter third-letter color-accent'>o</h2>
                    <h2 className='header-letter fourth-letter color-accent'>u</h2>
                    <h2 className='header-letter fifth-letter color-accent'>t</h2>
                    <h2 className='header-letter sixth-letter color-accent'>M</h2>
                    <h2 className='header-letter seventh-letter color-accent'>e</h2>
                </div>
            </section>
        </div>
    );
}
