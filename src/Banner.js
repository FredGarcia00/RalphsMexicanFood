import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.scss';
function Banner() {
    return (
        <div className="banner">
            <div className="banner__overlay"></div>
            <h1>Ralph's mexican food</h1>
            <Link to="/menu">
            <button className="banner__btn">See menu & order</button>
            </Link>
        </div>
    )
}

export default Banner
