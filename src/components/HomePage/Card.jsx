import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Card = () => {
    const data = [
        { img: '/data/image 1.png' },
        { img: '/data/image 2.png' },
        { img: '/data/image 3.png' }
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
        <div className="mb-80">
            <Slider {...settings}>
                {data.map((item, index) => (
                    <div key={index}>
                        <img src={item.img} alt={`Slide ${index}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Card;