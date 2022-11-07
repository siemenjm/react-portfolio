import React, { useState } from 'react';
import '../styles/Carousel.css';
import testimonialData from '../data/testimonial_data';
import Testimonial from '../components/Testimonial';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Carousel() {
    const allTestimonials = testimonialData.map((testimonial) => {
        return <Testimonial testimonial={testimonial} />
    });

    return (
        <div className='carousel'>
            {/* <button className="carousel-button"><FaChevronLeft /></button> */}
            <div className="testimonial-container">
                {allTestimonials}
            </div>
            {/* <button className="carousel-button"><FaChevronRight /></button> */}
        </div>
    );
}
