import React from 'react';
import projectData from '../data/project_data';
import Project from '../components/Project';

export default function ProjectsPage() {
    const allProjects = projectData.map((project, index) => {
        return <Project project={project} projectIndex={index} key={`${project.title}-${index}`} />;           
    });
    
    return (
        <div className='page'>
            <section className="projects-section single-page">
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
        </div>
    );
}
