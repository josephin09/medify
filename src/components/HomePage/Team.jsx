import React from 'react';
import Slider from "react-slick";

const Team = () => {
    const data = [
        { img: '/data2/doc1.png' },
        { img: '/data2/doc2.png' },
        { img: '/data2/doc3.png' },
        
    ];

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (
        <div className='team-container'>
            <h1 className='heading' style={{ textAlign: 'center' }}>Our Medical Specialists</h1>
            <Slider {...settings} className='slider'>
                {data.map((item, index) => (
                    <div key={index}>
                        <img src={item.img} alt={`Slide ${index}`} className='slide-img' />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Team;