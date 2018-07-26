import React from 'react';
import './Cartitem.css';
import PropTypes from 'prop-types';

const CartItem = ({ product, index, removeItem }) => {
    return (
        <li className='singleCartProduct'>
            <img src='https://imgurbancity.pl/files/sc_staging_images/brand/full_151/694/921/4_03/13406750.jpg' alt='product' />
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

CartItem.propTypes = {
    product: PropTypes.object.isRequired, 
    index: PropTypes.number.isRequired, 
    removeItem: PropTypes.func.isRequired
};

export default CartItem

