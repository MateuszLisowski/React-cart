import React from 'react';
import './Cart.css';
import carticon from '../../assets/carticon.svg';

const Cart = ({ isCartVisible, showCart, hideCart }) => {
    const cartContent = isCartVisible ? 
    <div className='cartContent' onMouseLeave={hideCart}>
        <ul>
            <li className='singleCartProduct'>
                <img />
                <div>
                    <p>
                    </p>
                    <p>
                        15 zł
                </p>
                    <p>
                        chosen size: 3
                </p>
                    <button className='removeItem'>
                        Remove item
                </button>
                </div>
            </li>
        </ul>
        <button className='buyButton'>
            Buy items
    </button>
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