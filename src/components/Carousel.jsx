import React from 'react';
import '../styles/Carousel.css';
import testimonialData from '../data/testimonial_data';
import Testimonial from '../components/Testimonial';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Carousel() {
    const allTestimonials = testimonialData.map((testimonial, index) => {
        return <Testimonial testimonial={testimonial} key={`${testimonial.author}-${index}`} />
    });

    return (
        <div className='carousel'>
            <button className="carousel-button"><FaChevronLeft /></button>
            {allTestimonials}
            <button className="carousel-button"><FaChevronRight /></button>
        </div>
    );
}
