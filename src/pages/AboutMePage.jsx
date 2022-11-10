import React from 'react';
import { Link } from 'react-router-dom';
import headshot from '../assets/headshot.png';
import techStackData from '../data/tech_stack_data';
import Carousel from '../components/Carousel';
import TechWrapper from '../components/TechWrapper';

export default function AboutMePage() {
    const allTech = techStackData.map((project, index) => {
        return <TechWrapper tech={project.tech} logo={project.logo} key={`${project.tech} - ${index}`}/>
    });
    
    return (
        <div className='page'>
            <section className="about-me-section single-page">
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
                        <h4>I'm a freelance full stack software developer working remotely out of Flint, Michigan.</h4>
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
                <div className="content-wrapper">
                    {allTech}
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
        </div>
    );
}
