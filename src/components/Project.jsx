import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import MediaQuery from 'react-responsive';

export default function Project({ project, projectIndex }) {
    let cardStyle = '';
    let contentStyle = 'right-wrapper';
    if (projectIndex % 2 !== 0) {
        cardStyle = 'reverse';
        contentStyle = 'left-wrapper';
    }

    const allTech = project.projectTech.map((tech, index) => {
        return <p key={`${tech}-${index}`} >{tech}</p>;
    });

    return (
        <div className={`project-card ${cardStyle}`}>
            <MediaQuery maxWidth={1024}>
                <div className="content-wrapper">
                    <h4><a href={project.deployedLink} target='_blank' rel='noopener noreferrer' >{project.title}</a></h4>
                    <h5>{project.shortDesc}</h5>
                </div>
            </MediaQuery>
            <div className='image-wrapper'>
                <a href={project.deployedLink} target='_blank' rel='noopener noreferrer' >
                    <img src={project.screenshot} alt={project.screenshotAlt} className="project-screenshot" />
                </a>
            </div>
            <div className={`content-wrapper ${contentStyle}`}>
                <MediaQuery minWidth={1025}>
                    <h4><a href={project.deployedLink} target='_blank' rel='noopener noreferrer' >{project.title}</a></h4>
                    <h5>{project.shortDesc}</h5>
                </MediaQuery>
                <p>{project.longDesc}</p>
                <div className="project-tech-wrapper">
                    {allTech}
                </div>
                <div className="project-links-wrapper">
                    { project.githubLink ? <a href={project.githubLink} target='_blank' rel='noopener noreferrer' >
                        <FaGithub className='project-link-icon' />
                    </a> : <></>}
                    <a href={project.deployedLink} target='_blank' rel='noopener noreferrer' >
                        <FaExternalLinkAlt className='project-link-icon' />
                    </a>
                </div>
            </div>
        </div>
    );
}
