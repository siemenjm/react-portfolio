import React from 'react';
import '../styles/AboutMeSection.css';
import '../styles/HeroSection.css';
import '../styles/ProjectsSection.css';
import '../styles/SectionHeader.css';
import '../styles/TechStackSection.css';
import '../styles/TestimonialSection.css';
import headshot from '../assets/headshot.png';
import htmlLogo from '../assets/HTML_logo.png';
import cssLogo from '../assets/css_logo.png';
import jsLogo from '../assets/JavaScript-logo.png';
import pythonLogo from '../assets/python-logo-only.png';
import reactLogo from '../assets/React-icon.svg';
import nodeLogo from '../assets/Node.js_logo.svg';
import expressLogo from '../assets/Expressjs.png';
import mongoLogo from '../assets/MongoDB_Logo.svg';
import postgresqlLogo from '../assets/PostgreSQL_logo.svg';
import wordpressLogo from '../assets/WordPress_logo.svg';
import allSportsPhotographyLogo from '../assets/All_Sports_Photography_logo.png';
import NavLink from '../components/NavLink';
import { Link } from 'react-router-dom';
import clientWorkData from '../data/client_work_data';
import projectData from '../data/project_data';
import testimonialData from '../data/testimonial_data';
import Project from '../components/Project';
import Testimonial from '../components/Testimonial';

export default function HomePage({ currentPage, setCurrentPage }) {
    const allProjects = projectData.map((project, index) => {
        return <Project project={project} projectIndex={index} key={`${project.title}-${index}`} />;           
    });

    const allClientWork = clientWorkData.map((project, index) => {
        return <Project project={project} projectIndex={index} key={`${project.title}-${index}`} />;  
    });

    const allTestimonials = testimonialData.map((testimonial, index) => {
        return <Testimonial testimonial={testimonial} key={`${testimonial.author}-${index}`} />
    });

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
                    <div className="background-line"></div>
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
            </section>
            <section className="tech-stack-section">
                <div className="content-wrapper">
                    <div className="tech-wrapper">
                        <img src={htmlLogo} alt="HTML logo" />
                        <p>HTML</p>
                    </div>
                    <div className="tech-wrapper">
                        <img src={cssLogo} alt="CSS logo" />
                        <p>CSS</p>
                    </div>
                    <div className="tech-wrapper">
                        <img src={jsLogo} alt="JavaScript logo" />
                        <p>JavaScript</p>
                    </div>
                    <div className="tech-wrapper">
                        <img src={pythonLogo} alt="Python logo" />
                        <p>Python</p>
                    </div>
                    <div className="tech-wrapper">
                        <img src={reactLogo} alt="React.js logo" />
                        <p>React.js</p>
                    </div>
                    <div className="tech-wrapper">
                        <img src={nodeLogo} alt="Node.js logo" className='light-background' />
                        <p>Node.js</p>
                    </div>
                    <div className="tech-wrapper">
                        <img src={expressLogo} alt="Express.js logo" className='light-background' />
                        <p>Express.js</p>
                    </div>
                    <div className="tech-wrapper">
                        <img src={mongoLogo} alt="MongoDB logo" className='light-background' />
                        <p>MongoDB</p>
                    </div>
                    <div className="tech-wrapper">
                        <img src={postgresqlLogo} alt="PostgreSQL logo" />
                        <p>PostgreSQL</p>
                    </div>
                    <div className="tech-wrapper">
                        <img src={wordpressLogo} alt="WordPress logo" className='light-background' />
                        <p>WordPress</p>
                    </div>
                </div>
                <div className="section-header-wrapper">
                    <h2 className='header-letter first-letter color-accent'>T</h2>
                    <h2 className='header-letter second-letter color-accent'>e</h2>
                    <h2 className='header-letter third-letter color-accent'>c</h2>
                    <h2 className='header-letter fourth-letter color-accent'>h</h2>
                    <h2 className='header-letter fifth-letter color-accent'>S</h2>
                    <h2 className='header-letter sixth-letter color-accent'>t</h2>
                    <h2 className='header-letter seventh-letter color-accent'>a</h2>
                    <h2 className='header-letter eighth-letter color-accent'>c</h2>
                    <h2 className='header-letter ninth-letter color-accent'>k</h2>
                    <div className="background-line"></div>
                </div>
            </section>
            <section className="projects-section">
                <div className="section-header-wrapper">
                    <h2 className='header-letter first-letter color-accent'>P</h2>
                    <h2 className='header-letter second-letter color-accent'>r</h2>
                    <h2 className='header-letter third-letter color-accent'>o</h2>
                    <h2 className='header-letter fourth-letter color-accent'>j</h2>
                    <h2 className='header-letter fifth-letter color-accent'>e</h2>
                    <h2 className='header-letter sixth-letter color-accent'>c</h2>
                    <h2 className='header-letter seventh-letter color-accent'>t</h2>
                    <h2 className='header-letter eighth-letter color-accent'>s</h2>
                    <div className="background-line"></div>
                </div>
                <div className="content-wrapper">
                    <h3>Some Cool Things I've Made</h3>
                    {allProjects}
                </div>
            </section>
            <section className="client-work-section">
                <div className="content-wrapper">
                    <h3>Freelance Work Completed for Clients</h3>
                    {allClientWork}
                </div>
                <div className="section-header-wrapper">
                    <h2 className='header-letter first-letter color-accent'>C</h2>
                    <h2 className='header-letter second-letter color-accent'>l</h2>
                    <h2 className='header-letter third-letter color-accent'>i</h2>
                    <h2 className='header-letter fourth-letter color-accent'>e</h2>
                    <h2 className='header-letter fifth-letter color-accent'>n</h2>
                    <h2 className='header-letter sixth-letter color-accent'>t</h2>
                    <h2 className='header-letter seventh-letter color-accent'>W</h2>
                    <h2 className='header-letter eighth-letter color-accent'>o</h2>
                    <h2 className='header-letter ninth-letter color-accent'>r</h2>
                    <h2 className='header-letter tenth-letter color-accent'>k</h2>
                    <div className="background-line"></div>
                </div>
            </section>
            <section className="testimonial-section">
                <div className="section-header-wrapper">
                    <h2 className='header-letter first-letter color-accent'>T</h2>
                    <h2 className='header-letter second-letter color-accent'>e</h2>
                    <h2 className='header-letter third-letter color-accent'>s</h2>
                    <h2 className='header-letter fourth-letter color-accent'>t</h2>
                    <h2 className='header-letter fifth-letter color-accent'>i</h2>
                    <h2 className='header-letter sixth-letter color-accent'>m</h2>
                    <h2 className='header-letter seventh-letter color-accent'>o</h2>
                    <h2 className='header-letter eighth-letter color-accent'>n</h2>
                    <h2 className='header-letter ninth-letter color-accent'>i</h2>
                    <h2 className='header-letter tenth-letter color-accent'>a</h2>
                    <h2 className='header-letter eleventh-letter color-accent'>l</h2>
                    <h2 className='header-letter twelfth-letter color-accent'>s</h2>
                    <div className="background-line"></div>
                </div>
                <div className="content-wrapper">
                    <h3>What do people have to say about me?</h3>
                    {allTestimonials}
                </div>
            </section>
        </div>
    );
}
