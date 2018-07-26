import React from 'react';
import './Cart.css';
import carticon from '../../assets/carticon.svg';
import CartItems from './CartItems/CartItems';
import PropTypes from 'prop-types';

const Cart = ({ isCartVisible, showCart, hideCart, cartItems, buyItems, removeItem }) => {
    const insideCartContent = cartItems.length ? 
        <CartItems 
            cartItems={cartItems} 
            buyItems={buyItems} 
            removeItem={removeItem} /> : 
        <p className='addItemToCart'>Add item to cart!</p>

    const cartContent = isCartVisible ? 
    <div className='cartContent' onMouseLeave={hideCart}>
        {insideCartContent}
    </div> : 
    <img src={carticon} className='cartIcon' onMouseOver={showCart} alt='cartIcon' />
    return (
        <section className='cart'>
            {cartContent}
        </section>
    )
}

Cart.propTypes = {
    isCartVisible: PropTypes.bool.isRequired, 
    showCart: PropTypes.func.isRequired, 
    hideCart: PropTypes.func.isRequired, 
    cartItems: PropTypes.arrayOf(PropTypes.object).isRequired, 
    buyItems: PropTypes.func.isRequired, 
    removeItem: PropTypes.func.isRequired
};

export default Cart

