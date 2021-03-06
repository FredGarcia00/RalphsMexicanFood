import React from 'react';
import { Link } from 'react-router-dom';
// import Header from './Header';
import Footer from './Footer';
import './Menu.scss';

function Menu() {
    return (
        <div className="menu">
            {/* <Header/> */}
            <Link to="/menuOrder">
            <div className="menu__orderBtn">Order Now</div>
            </Link>
            <div className="menu__img">
                <h1 className="menu__title">
                    menu
                </h1>
            </div>
            <div className="menu__container">
                <h3 className="menu__category">
                    Burritos
                <p>Combination burritos contain beans and rice</p>
                </h3>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            Asada
                        </div>
                        <div className="menu__price">$5.80</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            Chicken
                        </div>
                        <div className="menu__price">$5.80</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            Lengua
                        </div>
                        <div className="menu__price">$6.25</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            Adovada
                        </div>
                        <div className="menu__price">$5.80</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            Chile Colorado
                        </div>
                        <div className="menu__price">$5.80</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            All meat burritos
                        </div>
                        <div className="menu__price">$8.45</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            Cabeza
                        </div>
                        <div className="menu__price">$6.25</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            Bean and Rice
                        </div>
                        <div className="menu__price">$3.25</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            Chile verde
                        </div>
                        <div className="menu__price">$5.80</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            Beef
                        </div>
                        <div className="menu__price">$5.80</div>
                </div>
                <h3 className="menu__category">
                    Burrito Plate
                <p></p>
                </h3>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            Asada Dinner Plate
                        </div>
                        <div className="menu__price">$8.50</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            Chile Colorado Dinner Plate
                        </div>
                        <div className="menu__price">$8.50</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            Cabeza Dinner Plate
                        </div>
                        <div className="menu__price">$8.88</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            Chile Colorado Burrito Plate
                        </div>
                        <div className="menu__price">$8.50</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            Chile Verde Dinner Plate
                        </div>
                        <div className="menu__price">$8.50</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            Chicken Burrito Plate
                        </div>
                        <div className="menu__price">$8.50</div>
                </div>
                
                <h3 className="menu__category">
                    Plates
                <p>Your choice (asada, beef or chicken).</p>
                </h3>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            Taco, Enchilada
                        </div>
                        <div className="menu__price">$6.71</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            2 enchiladas, 1 tamal
                        </div>
                        <div className="menu__price">$7.88</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            1 Tamal 
                        </div>
                        <div className="menu__price">$5.00</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            3 enchiladas
                        </div>
                        <div className="menu__price">$7.88</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            Meat quesadilla
                        </div>
                        <div className="menu__price">$7.88</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            2 enchiladas, 1 taco
                        </div>
                        <div className="menu__price">$7.88</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            3 taquitos
                        </div>
                        <div className="menu__price">$6.71</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            tostada
                        </div>
                        <div className="menu__price">$6.25</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            2 taquitos
                        </div>
                        <div className="menu__price">$5.00</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            3 tacos
                        </div>
                        <div className="menu__price">$7.88</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            1 taco
                        </div>
                        <div className="menu__price">$5.00</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            2 enchiladas
                        </div>
                        <div className="menu__price">$6.71</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            2 tamales
                        </div>
                        <div className="menu__price">$5.00</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            2 tacos
                        </div>
                        <div className="menu__price">$5.00</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            taco, tamal
                        </div>
                        <div className="menu__price">$6.71</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            1 enchilada
                        </div>
                        <div className="menu__price">$5.00</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            2 tacos, 1 enchilada
                        </div>
                        <div className="menu__price">$7.88</div>
                </div>
                <h3 className="menu__category">
                    Salads
                <p>beef, chicken or asada.</p>
                </h3>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            Bean tostada
                        </div>
                        <div className="menu__price">$4.16</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            Concha
                        </div>
                        <div className="menu__price">$7.88</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            Tostada compuesta
                        </div>
                        <div className="menu__price">$7.88</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            taco salad
                        </div>
                        <div className="menu__price">$7.88</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            meat tosatada
                        </div>
                        <div className="menu__price">$5.08</div>
                </div>
                <h3 className="menu__category">
                    Asada Fries
                <p></p>
                </h3>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            Asada fries (mini)
                        </div>
                        <div className="menu__price">$8.50</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            Asada fries (large)
                        </div>
                        <div className="menu__price">$10.25</div>
                </div>
                <h3 className="menu__category">
                    Nachos & Chips
                <p></p>
                </h3>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            Chips & salsa
                        </div>
                        <div className="menu__price">$2.50</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            large Nachos
                        </div>
                        <div className="menu__price">$8.50</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            Chips & guacamole
                        </div>
                        <div className="menu__price">$3.75</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            Chips & cheese
                        </div>
                        <div className="menu__price">$3.75</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            Mini Nachos
                        </div>
                        <div className="menu__price">$7.18</div>
                </div>
                <h3 className="menu__category">
                    A la carte
                <p></p>
                </h3>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            taco chicken
                        </div>
                        <div className="menu__price">$2.00</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            taco de asada
                        </div>
                        <div className="menu__price">$1.70</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            taco de lengua
                        </div>
                        <div className="menu__price">$2.00</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            enchiladas
                        </div>
                        <div className="menu__price">$2.00</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            taquitos
                        </div>
                        <div className="menu__price">$2.25</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            taco de cabeza
                        </div>
                        <div className="menu__price">$2.00</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            taco beef
                        </div>
                        <div className="menu__price">$2.00</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            Tamal
                        </div>
                        <div className="menu__price">$1.86</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            cheese Quesadilla
                        </div>
                        <div className="menu__price">$3.95</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            taco adovada
                        </div>
                        <div className="menu__price">$1.70</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            Meat quesadilla
                        </div>
                        <div className="menu__price">$5.80</div>
                </div>
                <h3 className="menu__category">
                    side orders
                <p></p>
                </h3>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            sour cream
                        </div>
                        <div className="menu__price">$1.50</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            guacamole
                        </div>
                        <div className="menu__price">$2.00</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            bean & rice
                        </div>
                        <div className="menu__price">$2.00</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            jalapenos
                        </div>
                        <div className="menu__price">$1.00</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            beans
                        </div>
                        <div className="menu__price">$2.00</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            rice
                        </div>
                        <div className="menu__price">$2.00</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            flour tortilla with butter
                        </div>
                        <div className="menu__price">$1.39</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            extra cheese
                        </div>
                        <div className="menu__price">$1.00</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            flour tortilla(single)
                        </div>
                        <div className="menu__price">$1.00</div>
                </div>
                <h3 className="menu__category">
                    soft drinks
                <p></p>
                </h3>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            Dr. Pepper
                        </div>
                        <div className="menu__price">$1.00</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            Orange
                        </div>
                        <div className="menu__price">$1.00</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            Jamaica
                        </div>
                        <div className="menu__price">$1.50</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            Tamarindo
                        </div>
                        <div className="menu__price">$1.50</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            Pepsi
                        </div>
                        <div className="menu__price">$1.00</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            Sierra Mist
                        </div>
                        <div className="menu__price">$1.00</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            Diet Pepsi
                        </div>
                        <div className="menu__price">$1.00</div>
                </div>
                <div className="menu__card">
                        {/* <div className="menu__bg">
                        </div> */}
                        <div className="menu__info">
                            Horchata
                        </div>
                        <div className="menu__price">$1.50</div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Menu;
