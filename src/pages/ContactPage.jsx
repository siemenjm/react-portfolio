import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function ContactPage() {
    return (
        <div className='page'>
            <section className="contact-section single-page">
                <div className="line-effects">
                    <div className="line-effect-container horizontal">
                        <div className="horizontal-line-effect left"></div>
                        <h2 className="line-header color-accent">Say Hi!</h2>
                    </div>
                    <div className="line-effect-container vertical">
                        <div className="vertical-line-effect"></div>
                    </div>
                </div>
                <div className="content-wrapper left">
                    <h3>Like what you see? Reach out and let's connect!</h3>
                    <p>Send me an email at <span>contact@jaredsiemen.com</span> or reach out to me on <a href='https://www.linkedin.com/in/jaredsiemen' target='_blank' rel='noopener noreferrer' >LinkedIn</a>. You can also check out my Github repos by clickint the icon below. I'm looking forward to hearing from you!</p>
                    <div className="link-wrapper">
                        <a href="https://github.com/siemenjm/" target='_blank' rel='noopener noreferrer' >
                            <FaGithub className='project-link-icon' />
                        </a>
                        <a href='https://www.linkedin.com/in/jaredsiemen/' target='_blank' rel='noopener noreferrer' >
                            <FaLinkedin className='project-link-icon' />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
