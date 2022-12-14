import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/AboutMeSection.css';
import '../styles/ContactSection.css';
import '../styles/HeroSection.css';
import '../styles/LineEffect.css';
import '../styles/ProjectsSection.css';
import '../styles/SectionHeader.css';
import '../styles/TechStackSection.css';
import '../styles/TestimonialSection.css';
import headshot from '../assets/headshot.png';
import resume from '../documents/resume.pdf';
import clientWorkData from '../data/client_work_data';
import projectData from '../data/project_data';
import techStackData from '../data/tech_stack_data';
import Carousel from '../components/Carousel';
import NavLink from '../components/NavLink';
import Project from '../components/Project';
import TechWrapper from '../components/TechWrapper';

export default function HomePage({ currentPage, setCurrentPage }) {
  const allTech = techStackData.map((project, index) => {
    return (
      <TechWrapper
        tech={project.tech}
        logo={project.logo}
        lightBackground={project.lightBackground}
        key={`${project.tech} - ${index}`}
      />
    );
  });

  const allProjects = projectData.map((project, index) => {
    return (
      <Project
        project={project}
        projectIndex={index}
        key={`${project.title}-${index}`}
      />
    );
  });

  const allClientWork = clientWorkData.map((project, index) => {
    return (
      <Project
        project={project}
        projectIndex={index}
        key={`${project.title}-${index}`}
      />
    );
  });

  return (
    <div className="page">
      <section className="hero-section">
        <h1 className="hidden">Jared Siemen</h1>
        <div className="section-header-wrapper">
          <h2 className="header-letter first-letter color-accent">H</h2>
          <h2 className="header-letter second-letter color-accent">e</h2>
          <h2 className="header-letter third-letter color-accent">l</h2>
          <h2 className="header-letter fourth-letter color-accent">l</h2>
          <h2 className="header-letter fifth-letter color-accent">o</h2>
        </div>
        <h2>I'm Jared Siemen.</h2>
        <h2 className="color-light">
          I design and develop full stack websites.
        </h2>
        <p>
          I???m a full stack software developer with a diverse skillset that
          ranges from building single page applications using React and
          Express.js, to quickly churning out a marketing site for a small
          business, to designing a website interface from the ground up using
          Adobe Xd. Currently freelancing, but looking to join a team.
        </p>
        <div className="button-wrapper">
          <div className="inner-button-wrapper">
            <NavLink
              path={'/contact'}
              pageTitle={"Let's Connect"}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </section>
      <section className="about-me-section">
        <div className="line-effects">
          <div className="line-effect-container horizontal">
            <div className="horizontal-line-effect left"></div>
            <h2 className="line-header color-accent">About Me</h2>
          </div>
          <div className="line-effect-container vertical">
            <div className="vertical-line-effect"></div>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="content-wrapper">
            <h4>
              I'm a freelance full stack software developer working remotely out
              of Flint, Michigan.
            </h4>
            <p>
              Hello, I???m Jared! I love, love, love designing and building
              anything that runs on code, especially if it lives on the
              internet. My passion for web development started in early 2020
              when I was laid off due to COVID, was stuck in lockdown, and
              needed something to do. I found some coding challenges online and
              haven???t looked back!
            </p>
            <p>
              Since discovering this passion, I have started a freelance web
              design and development business, launched several websites out
              into the wild, and completed a software engineering bootcamp. My
              main focus now is leveraging the technical skills that I learned
              in the bootcamp in tandem with the communication and customer
              facing skills that I learned freelancing to deliver more and more
              complex products to my clients.
            </p>
            <p>
              Feel free to take a look at my{' '}
              <a href={resume} target="blank" className="resume">
                resume
              </a>
              !
            </p>
          </div>
          <div className="headshot-wrapper">
            <img src={headshot} alt="Jared Siemen headshot" />
            <div className="headshot-background"></div>
          </div>
        </div>
      </section>
      <section className="tech-stack-section">
        <div className="line-effects">
          <div className="line-effect-container horizontal">
            <div className="horizontal-line-effect right"></div>
            <h2 className="line-header color-accent right">Tech Stack</h2>
          </div>
          <div className="line-effect-container vertical right">
            <div className="vertical-line-effect"></div>
          </div>
        </div>
        <div className="content-wrapper">{allTech}</div>
      </section>
      <section className="projects-section">
        <div className="line-effects">
          <div className="line-effect-container horizontal">
            <div className="horizontal-line-effect left"></div>
            <h2 className="line-header color-accent">Projects</h2>
          </div>
          <div className="line-effect-container vertical">
            <div className="vertical-line-effect"></div>
          </div>
        </div>
        <div className="content-wrapper">
          <h3>Some Cool Things I've Made</h3>
          {allProjects}
        </div>
      </section>
      <section className="client-work-section">
        <div className="line-effects">
          <div className="line-effect-container horizontal">
            <div className="horizontal-line-effect right"></div>
            <h2 className="line-header color-accent right">Client Work</h2>
          </div>
          <div className="line-effect-container vertical right">
            <div className="vertical-line-effect"></div>
          </div>
        </div>
        <div className="content-wrapper">
          <h3>Freelance Work Completed for Clients</h3>
          {allClientWork}
        </div>
      </section>
      <section className="testimonial-section">
        <div className="line-effects">
          <div className="line-effect-container horizontal">
            <div className="horizontal-line-effect left"></div>
            <h2 className="line-header color-accent">Testimonials</h2>
          </div>
          <div className="line-effect-container vertical">
            <div className="vertical-line-effect"></div>
          </div>
        </div>
        <div className="content-wrapper">
          <h3>What do people have to say about me?</h3>
          <Carousel />
        </div>
      </section>
      <section className="contact-section">
        <div className="line-effects">
          <div className="line-effect-container horizontal">
            <div className="horizontal-line-effect right"></div>
            <h2 className="line-header color-accent right">Say Hi!</h2>
          </div>
          <div className="line-effect-container vertical right">
            <div className="vertical-line-effect"></div>
          </div>
        </div>
        <div className="content-wrapper">
          <h3>Like what you see? Reach out and let's connect!</h3>
          <p>
            Send me an email at <span>contact@jaredsiemen.com</span> or reach
            out to me on{' '}
            <a
              href="https://www.linkedin.com/in/jaredsiemen"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            . You can also check out my Github repos by clickint the icon below.
            I'm looking forward to hearing from you!
          </p>
          <div className="link-wrapper">
            <a
              href="https://github.com/siemenjm/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="project-link-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/jaredsiemen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="project-link-icon" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
