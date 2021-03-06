import React from 'react';
import './Salad.scss';

function Salad() {
    return (
        <div className="salad">
            <div className="salad__bg">
            </div>
            <div className="salad__menu">
                        <div className="salad__info">
                            Bean tostada
                        </div>
                        <div className="salad__price">$4.16</div>
                </div>
                <div className="salad__menu">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="salad__info">
                            Concha
                        </div>
                        <div className="salad__price">$7.88</div>
                </div>
                <div className="salad__menu">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="salad__info">
                            Tostada compuesta
                        </div>
                        <div className="salad__price">$7.88</div>
                </div>
                <div className="salad__menu">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="salad__info">
                            taco salad
                        </div>
                        <div className="salad__price">$7.88</div>
                </div>
                <div className="salad__menu">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="salad__info">
                            meat tosatada
                        </div>
                        <div className="salad__price">$5.08</div>
                </div>
            
        </div>
    )
}

export default Salad
