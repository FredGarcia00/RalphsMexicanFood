import React from 'react';
import { useDispatch } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import { DeleteCart } from './features/counter/CartSlice';

import './CheckoutItem.scss';

function CheckoutItem({title, price, id}) {

    const dispatch = useDispatch();
   
    const deleteItemCart = () => {
        dispatch(DeleteCart({id}))
    }

    return (
        <div className="checkoutItem">
            {title} ${price} <DeleteIcon style={{cursor:'pointer'}} onClick={deleteItemCart}/>

        </div>
    )
}

export default CheckoutItem
