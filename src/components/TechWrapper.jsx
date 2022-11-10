import React from 'react';

export default function TechWrapper({ tech, logo }) {
    return (
        <div className='tech-wrapper'>
            <img src={logo} alt={`{tech} logo`} />
            <p>{tech}</p>
        </div>
    );
}
