import React, { useState } from 'react';
import './slide-show.css'
import { SliderData } from './SliderData';

const ImageSlider = () => {

    const [current, setCurrent] = useState(0);
    const length = SliderData.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(SliderData) || SliderData.length <= 0) {
        return null;
    }

    return (
        <section className='slider'>
            <button onClick={prevSlide} ><i class="fa-solid fa-arrow-left-long"></i> </button>
            {SliderData.map((slide, index) => {
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (
                            <img src={slide.image} alt='travel-img' className='image' />
                        )}
                    </div>
                );
            })}
            <button onClick={nextSlide} ><i class="fa-solid fa-arrow-right-long"></i></button>
        </section>
    );
};

export default ImageSlider;