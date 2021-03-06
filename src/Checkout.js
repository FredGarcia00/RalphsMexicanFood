import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { selectCart } from './features/counter/CartSlice';
import { getCartTotal } from './features/counter/CartSlice';
import Pop from './Pop';

import CurrencyFormat from 'react-currency-format';
import CheckoutItem from './CheckoutItem';


import empty from './img/empty.jpg';
import './Checkout.scss';
import './Pop.scss';


function Checkout() {
    const {cart} = useSelector(selectCart);
    const history = useHistory();
    const [modal, setModal] = useState(false);
    const [name , setName] = useState('');

    const orderComplete = () => {
        setModal(true);
        setTimeout(() => history.push("/"), 5000);
    }
    
    return (
        <div className="checkout">

            <div className={modal ? '' : 'pop__hidden'}>
                <Pop name={name}/>
            </div>
            {cart?.length === 0 ? (
                <div className="checkout__emptyCart">
                    <div>Your shopping cart is empty</div>
                    <img className="checkout__img" src={empty} alt=""/>
                    <Link to="/menuOrder" style={{textDecoration: 'none'}}>
                    <div className="checkout__emptyOrder">See menu and order</div>
                    </Link>
                </div>
                ) : (
                        <div className="checkout__mainContent">
                            <h2> Your order </h2>
                            {cart?.map(item => (
                                <div className="checkout__mainOrder">
                                    <CheckoutItem
                                    title={item.title}
                                    price={item.price}
                                    id={item.id}/>
                                </div>
                            ))}
                        </div>
                    )}
            <div>
                {cart.length > 0 && (
                    <CurrencyFormat 
                    renderText={(value) => (
                        <div className="checkout__container">
                                  <div className="checkout__info">Customer information</div>
                                  <form action="submit">
                                      <div>
                                          <div>* (required)</div>
                                          *
                                        <input className="checkout__input" onChange={e => setName(e.target.value)} type="text" placeholder="First name"/>
                                      </div>
                                      <div>
                                          *
                                        <input className="checkout__input" type="phone number" placeholder="number"/>
                                      </div>
    
                                  </form>
                                  <div className="checkout__total">
                                Total: {value} 
                                  </div>
                                <button className="checkout__currency" disabled={name !='' ? false : true} onClick={orderComplete}>Complete order</button>
                              </div>
                       )}
                       decimalScale={2}
                       value={getCartTotal(cart)}
                       displayType={'text'}
                       thousandSeperator={true}
                       prefix={'$'}
                       />
                )}
            </div>
        </div>
    )
}
    

export default Checkout;
