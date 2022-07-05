import React, { useState } from 'react';
import './slide-show.css'

const ImageSlider = () => {
    const SliderData = [
        {
            image:
                'https://www.ephotozine.com/articles/dog-photography-tips-for-perfect-pet-portraits-33803/images/Vincent-Lagrange.jpg'
        },
        {
            image:
                'https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80'
        },
        {
            image:
                'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2999937/settings_images/AEEB7Y2sRpKePRXWjgG8_2397-141103-CharlotteReeves.jpg'
        },
        {
            image:
                'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F34%2F2020%2F04%2F17%2Fwelsh-corgi-dog-garden-getty-0420.jpg'
        },
        {
            image:
                'https://media.istockphoto.com/photos/group-of-pets-posing-around-a-border-collie-dog-cat-ferret-rabbit-picture-id1296353202?b=1&k=20&m=1296353202&s=170667a&w=0&h=PZjACFOzhvma6vorhg2TXRwrZwo6rHt4ttCTUctGZaQ='
        }
    ];
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