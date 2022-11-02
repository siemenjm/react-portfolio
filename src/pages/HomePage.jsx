import React from 'react';
import '../styles/HeroSection.css';
import '../styles/Section.css';
import '../styles/AboutMeSection.css';
import headshot from '../assets/headshot.png';
import NavLink from '../components/NavLink';
import { Link } from 'react-router-dom';

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
                <div className="upper-wrapper">
                    <div className="section-header-wrapper">
                        <h2 className='header-letter first-letter color-accent'>A</h2>
                        <h2 className='header-letter second-letter color-accent'>b</h2>
                        <h2 className='header-letter third-letter color-accent'>o</h2>
                        <h2 className='header-letter fourth-letter color-accent'>u</h2>
                        <h2 className='header-letter fifth-letter color-accent'>t</h2>
                        <h2 className='header-letter sixth-letter color-accent'>M</h2>
                        <h2 className='header-letter seventh-letter color-accent'>e</h2>
                    </div>
                    <div className="content-wrapper">
                        <h3>I'm a freelance full stack software developer working remotely out of Flint, Michigan.</h3>
                        <p>Hello, I’m Jared! I love, love, love designing and building anything that runs on code, especially if it lives on the internet. My passion for web development started in early 2020 when I was laid off due to COVID, was stuck in lockdown, and needed something to do. I found some coding challenges online and haven’t looked back!</p>
                        <p>Since discovering this passion, I have started a freelance web design and development business, launched several websites out into the wild, and completed a software engineering bootcamp. My main focus now is leveraging the technical skills that I learned in the bootcamp in tandem with the communication and customer facing skills that I learned freelancing to deliver more and more complex products to my clients.</p>
                        <p>Feel free to take a look at my <Link to={'/resume'}>resume</Link>!</p>
                    </div>
                    <div className="headshot-wrapper">
                        <img src={headshot} alt="Jared Siemen headshot image" />
                        <div className="headshot-background"></div>
                    </div>
                </div>
            </section>
        </div>
    );
}
