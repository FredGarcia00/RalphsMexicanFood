import React from 'react';
import './Nacho.scss';


function Nacho() {
    return (
        <div className="nacho">
            <div className="nacho__bg"></div>
            <div className="nacho__menu">
                        <div className="nacho__info">
                            Chips & salsa
                        </div>
                        <div className="nacho__price">$2.50</div>
                </div>
                <div className="nacho__menu">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="nacho__info">
                            large Nachos
                        </div>
                        <div className="nacho__price">$8.50</div>
                </div>
                <div className="nacho__menu">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="nacho__info">
                            Chips & guacamole
                        </div>
                        <div className="nacho__price">$3.75</div>
                </div>
                <div className="nacho__menu">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="nacho__info">
                            Chips & cheese
                        </div>
                        <div className="nacho__price">$3.75</div>
                </div>
                <div className="nacho__menu">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="nacho__info">
                            Mini Nachos
                        </div>
                        <div className="nacho__price">$7.18</div>
                </div>
            
        </div>
    )
}

export default Nacho
