import React, { useState } from 'react';
import './Specialisation.css'; 

const Specialisation = () => {
    const data = [
        { img: '/data3/Frame 1.png' },
        { img: '/data3/Frame 2.png' },
        { img: '/data3/Frame 3.png' },
        { img: '/data3/Frame 4.png' },
        { img: '/data3/Frame 5.png' },
        { img: '/data3/Frame 6.png' },
        { img: '/data3/Frame 7.png' },
        { img: '/data3/Frame 8.png' },
        { img: '/data3/Frame 1.png' },
        { img: '/data3/Frame 2.png' },
        { img: '/data3/Frame 3.png' },
        { img: '/data3/Frame 4.png' },
        { img: '/data3/Frame 5.png' },
        { img: '/data3/Frame 6.png' },
        { img: '/data3/Frame 7.png' },
        { img: '/data3/Frame 8.png' }
    ];

    const [showAll, setShowAll] = useState(false);

    const handleToggleView = () => {
        setShowAll(!showAll);
    };

    return (
        <div className='specialisation-container'>
            <h1 className='heading'>Find by Specialisation</h1>
            <div className='grid-container'>
                {data.slice(0, showAll ? data.length : 8).map((item, index) => (
                    <img key={index} src={item.img} alt={`Specialization ${index}`} className='specialisation-img' />
                ))}
            </div>
            <button onClick={handleToggleView} className='view-button'>
                {showAll ? "View Less" : "View More"}
            </button>
        </div>
    );
};

export default Specialisation;
