import React from 'react';
import testimonialData from '../data/testimonial_data';
import Testimonial from '../components/Testimonial';

export default function Carousel() {
    const allTestimonials = testimonialData.map((testimonial, index) => {
        return <Testimonial testimonial={testimonial} key={`${testimonial.author}-${index}`} />
    });

    return (
        <div className='carousel'>
            <button className="carousel-button"></button>
            {allTestimonials}
            <button className="carousel-button"></button>
        </div>
    );
}
