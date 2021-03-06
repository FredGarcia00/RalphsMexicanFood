import React from 'react';
import './Burrito.scss';


function Burrito() {
    return (
        <div className="burrito">
                   <div className="burrito__bg"></div>
            <div className="burrito__card">
                        <div className="burrito__info">
                            Asada
                        </div>
                        <div className="burrito__price">$5.80</div>
                </div>
                <div className="burrito__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            Chicken
                        </div>
                        <div className="menu__price">$5.80</div>
                </div>
                <div className="burrito__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            Lengua
                        </div>
                        <div className="menu__price">$6.25</div>
                </div>
                <div className="burrito__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            Adovada
                        </div>
                        <div className="menu__price">$5.80</div>
                </div>
                <div className="burrito__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            Chile Colorado
                        </div>
                        <div className="menu__price">$5.80</div>
                </div>
                <div className="burrito__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            All meat burritos
                        </div>
                        <div className="menu__price">$8.45</div>
                </div>
                <div className="burrito__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            Cabeza
                        </div>
                        <div className="menu__price">$6.25</div>
                </div>
                <div className="burrito__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            Bean and Rice
                        </div>
                        <div className="menu__price">$3.25</div>
                </div>
                <div className="burrito__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            Chile verde
                        </div>
                        <div className="menu__price">$5.80</div>
                </div>
                <div className="burrito__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            Beef
                        </div>
                        <div className="menu__price">$5.80</div>
                </div>
        </div>
    )
}

export default Burrito
