import React from 'react';
import './Cartitem.css';

const CartItem = ({ product, index, removeItem }) => {
    return (
        <li className='singleCartProduct'>
            <img src='https://imgurbancity.pl/files/sc_staging_images/brand/full_151/694/921/4_03/13406750.jpg' />
            <div>
                <p>
                    {product.name}
                </p>
                <p>
                    {product.price} zł
                </p>
                <p>
                    chosen size: {product.chosenSize}
                </p>
                <button className='removeItem' onClick={() => removeItem(index)}>
                    Remove item
                </button>
            </div>
        </li>
    )
}

export default CartItem

