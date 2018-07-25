import React from 'react';
import CartItem from './CartItem/Cartitem';
import Aux from '../../../hoc/Aux';
import './CartItems.css';

const CartItems = ({cartItems,removeItem, buyItems}) => {
    return (
        <Aux>
            <ul>
                {cartItems.map((item, i) => <CartItem product={item} key={i} removeItem={removeItem} index={i} />)}
            </ul>
            <button className='buyButton' onClick={buyItems}>
                    Buy items
            </button>
        </Aux>
    );
};

export default CartItems;