import React from 'react';

export default function TechWrapper({ tech, logo, lightBackground }) {
    let background;
    lightBackground ? background = 'light-background' : background = '';
    
    return (
        <div className='tech-wrapper'>
            <img src={logo} alt={`{tech} logo`} className={`${background}`}/>
            <p>{tech}</p>
        </div>
    );
}
