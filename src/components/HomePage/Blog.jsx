import React from 'react';
import image from '../../assets/blog.png';
import './Blog.css'; 

const Blog = () => {
    return (
        <div className="blog-section">
            <div className="blog-heading blue-heading">
               <h2>Blog &amp; News</h2>
            </div>
            <div className="latest-news-heading">
                <h3>Read Our Latest News</h3>
            </div>
            <div className="blog-content-wrapper">
                <div className="blog-content">
                    <div className="blog-image">
                        <img src={image} alt="Blog Image1" />
                    </div>
                </div>
                <div className="blog-content">
                    <div className="blog-image">
                        <img src={image} alt="Blog Image2" />
                    </div>
                </div>
                <div className="blog-content">
                    <div className="blog-image">
                        <img src={image} alt="Blog Image3" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
