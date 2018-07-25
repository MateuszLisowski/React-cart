import React from 'react';
import './Cart.css';
import carticon from '../../assets/carticon.svg';
import CartItem from './CartItem/Cartitem';
import Aux from '../../hoc/Aux';

const Cart = ({ isCartVisible, showCart, hideCart, cartItems, buyItems, removeItem }) => {
    const isSomethingInCart = cartItems.length ? 
    <Aux>
        <ul>
            {cartItems.map((item, i) => <CartItem product={item} key={i} removeItem={removeItem} index={i} />)}
        </ul>
        <button className='buyButton' onClick={buyItems}>
                Buy items
        </button>
    </Aux> : <p className='addItemToCart'>Add item to cart!</p>

    const cartContent = isCartVisible ? 
    <div className='cartContent' onMouseLeave={hideCart}>
        {isSomethingInCart}
    </div> 
        : 
    <img src={carticon} className='cartIcon' onMouseOver={showCart} />

    return (
        <section className='cart'>
            {cartContent}
        </section>
    )
}

export default Cart

