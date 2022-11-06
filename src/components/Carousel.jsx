import React, { useState } from 'react';
import '../styles/Carousel.css';
import testimonialData from '../data/testimonial_data';
import Testimonial from '../components/Testimonial';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Carousel() {
    const [currentTest, setCurrentTest] = useState(0);

    function handleLeftClick(e) {
        if (currentTest === 0) {
            setCurrentTest(testimonialData.length - 1);
        } else {
            setCurrentTest(currentTest - 1);
        }
    }

    function handleRightClick(e) {
        if (currentTest === testimonialData.length - 1) {
            setCurrentTest(0);
        } else {
            setCurrentTest(currentTest + 1);
        }
    }

    // const allTestimonials = testimonialData.map((testimonial, index) => {
    //     return <Testimonial testimonial={testimonial} key={`${testimonial.author}-${index}`} />
    // });

    return (
        <div className='carousel'>
            <button onClick={handleLeftClick} className="carousel-button"><FaChevronLeft /></button>
            <Testimonial testimonial={testimonialData[currentTest]} />
            <button onClick={handleRightClick} className="carousel-button"><FaChevronRight /></button>
        </div>
    );
}
