import React from 'react';
import CartItem from './CartItem/Cartitem';
import Aux from '../../../hoc/Aux';
import './CartItems.css';
import PropTypes from 'prop-types';

const CartItems = ({ cartItems, removeItem, buyItems }) => {
    return (
        <Aux>
            <ul className='cartItems'>
                {cartItems.map((item, i) => {
                    return <CartItem
                        product={item}
                        key={i}
                        removeItem={removeItem}
                        index={i} />
                })}
            </ul>
            <button
                className='buyButton'
                onClick={buyItems}>
                Buy items
            </button>
        </Aux>
    );
};

CartItems.propTypes = {
    cartItems: PropTypes.arrayOf(PropTypes.object).isRequired, 
    buyItems: PropTypes.func.isRequired, 
    removeItem: PropTypes.func.isRequired
};

export default CartItems;