import React from 'react';
import './AsadaFries.scss';


function AsadaFries() {
    return (
        <div className="asadaFries">
                <div className="asadaFries__bg">
                </div>
            <div className="asadaFries__menu">
                        <div className="asadaFries__info">
                            Asada fries (mini)
                        </div>
                        <div className="menu__price">$8.50</div>
                </div>
                <div className="asadaFries__menu">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="asadaFries__info">
                            Asada fries (large)
                        </div>
                        <div className="menu__price">$10.25</div>
                </div>
            
        </div>
    )
}

export default AsadaFries
