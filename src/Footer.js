import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

function Footer() {
    return (
        <div className="footer">
                <div className="footer__title">Ralph's Mexican Food</div>
                <Link to="/menu">
                <button className="footer__btn">See menu & order</button>
                </Link>
            <div className="footer__hour">Hours</div>
                    <div className="footer__open">
                    <ul>
                        <li>Monday</li>
                        <li>Tuesday</li>
                        <li>Wednesday</li>
                        <li>Thursday</li>
                        <li>Friday</li>
                        <li>Saturday</li>
                        <li>Sunday</li>
                    </ul>
                    <ul>
                        <li>7am-6pm</li>
                        <li>7am-6pm</li>
                        <li>7am-6pm</li>
                        <li>7am-6pm</li>
                        <li>7am-6pm</li>
                        <li>7am-6pm</li>
                        <li>closed</li>
                    </ul>
                    </div>
                    <div className="footer__p">
                        <p>
                            Hours may differ in this
                            establishment in accordance to observed holidays.
                        </p>
                    </div>
        </div>
    )
}

export default Footer
