import React from 'react';
import './Cart.css';
import carticon from '../../assets/carticon.svg';
import CartItems from './CartItems/CartItems';

const Cart = ({ isCartVisible, showCart, hideCart, cartItems, buyItems, removeItem }) => {
    const insideCartContent = cartItems.length ? 
        <CartItems cartItems={cartItems} buyItems={buyItems} removeItem={removeItem}/> : 
        <p className='addItemToCart'>Add item to cart!</p>

    const cartContent = isCartVisible ? 
    <div className='cartContent' onMouseLeave={hideCart}>
        {insideCartContent}
    </div> : <img src={carticon} className='cartIcon' onMouseOver={showCart} />
    return (
        <section className='cart'>
            {cartContent}
        </section>
    )
}

export default Cart

