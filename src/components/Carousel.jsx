import React from 'react';
import '../styles/Carousel.css';
import testimonialData from '../data/testimonial_data';
import Testimonial from '../components/Testimonial';

export default function Carousel() {
    const allTestimonials = testimonialData.map((testimonial) => {
        return <Testimonial testimonial={testimonial} />
    });

    return (
        <div className='carousel'>
            <div className="testimonial-container">
                {allTestimonials}
            </div>
        </div>
    );
}
