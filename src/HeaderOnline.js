import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import InfoIcon from '@material-ui/icons/Info';
import { useSelector } from 'react-redux';
import './HeaderOnline.scss';
import { selectCart } from './features/counter/CartSlice';

function HeaderOnline() {
    const {cart} = useSelector(selectCart);
    return (
        <div className="headerO">
            <Link className="headerO__title" to="/">
            <div className="headerO__icon"><RestaurantIcon/></div>
            <div className="headerO__t">Ralph's</div>
            </Link>
            {/* <div className="headerO__border"></div> */}
            <InfoIcon/>
            {/* <div className="headerO__border-2"></div> */}

            <div className="headerO__cart">
                <Link className="headerO__cartIcon" to="/checkout">
                <ShoppingCartIcon/>
                </Link>
                    <div className={cart.length > 0 ? 'headerO__num': ''}>
                        {cart?.length}
                    </div>
            </div>
                
        </div>
    )
}

export default HeaderOnline
