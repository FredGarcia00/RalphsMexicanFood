import React, { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { AddtoCart, getCartTotal } from './features/counter/CartSlice';
import { useDispatch } from 'react-redux';
import {useSelector } from 'react-redux';
import { selectCart } from './features/counter/CartSlice';
import { DeleteCart } from './features/counter/CartSlice';
import CurrencyFormat from 'react-currency-format';
import { Link } from 'react-router-dom';

import './MenuItem.scss';


function MenuItem({title, price, id, lemon, salsa}) {

    const {cart} = useSelector(selectCart);
    const dispatch = useDispatch();
    const [order, setOrder] = useState(false);

    const showMenuToOrder = () => {
        setOrder(true);
        dispatch(AddtoCart({
            title, price, id,
        }))
    }

    const close = () => {
        setOrder(false);
    }

    const addToCart = () => {
        dispatch(AddtoCart({title,price, id}))

    }

    const deleteItemCart = () => {
        dispatch(DeleteCart({id}))
        // console.log('just deleted', {id});
    }

    return (
        <div className= 'MenuItem'>
                <div className='MenuItem__card'  onClick={showMenuToOrder}>
                    <div className="MenuItem__info">
                        {title}
                    </div>
                    <div className="MenuItem__price">${price}</div>
                </div>

                    <div className={order ? 'MenuItem__orderPage MenuItem__active' : 'MenuItem__orderPage'}>
                        <div className="MenuItem__active">
                            <p className="MenuItem__aTitle">{title}</p>
                            <p className="MenuItem__aPrice">${price}</p>
                        </div>
                            <div className="MenuItem__close">
                                <CloseIcon onClick={close}/>
                            </div>
                        <div className="MenuItem__addons">
                            <p>Add-ons</p>
                            <p>(Optional)</p>
                        </div>
                        <div className="MenuItem__checkBoxes">
                            <ul>
                                <li>< input class="checkbox" type="checkbox"/><div> lemon</div></li>
                                <li>< input  class="checkbox" type="checkbox"/><div>salsa</div></li>
                                
                            </ul>

                        </div>

                        <div className="MenuItem__orderBtn">
                            <button className="MenuItem__minus" disabled={cart.length === 1 ? true : false}onClick={deleteItemCart}>-</button>
                            <button className="MenuItem__add" onClick={addToCart}>+</button>
                            {/* <div>${getCartTotal(cart)}</div> */}

                            <div className="MenuItem__total">
                                 <CurrencyFormat 
                                 renderText={(value) => (
                                        <>
                                            <Link to='/checkout' style={{textDecoration:'none', color:'#fff'}}>
                                            continue to checkout {value}
                                            </Link>
                                        </>
                                 )}
                              
                                 decimalScale={2}
                                 value={getCartTotal(cart)}
                                 displayType={'text'}
                                 thousandSeperator={true}
                                 prefix={'$'}
                                 />
                                 </div>
                        </div>
                    </div>
            </div>
       
    )
}

export default MenuItem;
