import React from 'react';
import '../styles/Carousel.css';
import testimonialData from '../data/testimonial_data';
import Testimonial from '../components/Testimonial';

export default function Carousel() {
    const allTestimonials = testimonialData.map((testimonial, index) => {
        return <Testimonial testimonial={testimonial} key={index} />
    });

    return (
        <div className='carousel'>
            <div className="testimonial-container">
                {allTestimonials}
            </div>
        </div>
    );
}
