import React from 'react';

export default function Testimonial({ testimonial }) {
    return (
        <div className="testimonial-card">
            <p className="testimonial">{testimonial.testimonial}</p>
            <div className="testimonial-author-wrapper">
                <img src={testimonial.authorImage} alt="" className="author-image" />
                <div>
                    <p className="author-name">{testimonial.author}</p>
                    <a href={testimonial.link} target='_blank' rel='noopener noreferrer' className="author-business">{testimonial.authorBusiness}</a>
                </div>
            </div>
        </div>
    );
}
