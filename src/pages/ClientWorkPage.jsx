import React from 'react';
import clientWorkData from '../data/client_work_data';
import Project from '../components/Project';

export default function ClientWorkPage() {
    const allClientWork = clientWorkData.map((project, index) => {
        return <Project project={project} projectIndex={index} key={`${project.title}-${index}`} />;  
    });

    return (
        <div className='page'>
            <section className="client-work-section single-page">
                <div className="line-effects">
                    <div className="line-effect-container horizontal">
                        <div className="horizontal-line-effect left"></div>
                        <h2 className="line-header color-accent">Client Work</h2>
                    </div>
                    <div className="line-effect-container vertical">
                        <div className="vertical-line-effect"></div>
                    </div>
                </div>
                <div className="content-wrapper left">
                    <h3>Freelance Work Completed for Clients</h3>
                    {allClientWork}
                </div>
            </section>
        </div>
    );
}
