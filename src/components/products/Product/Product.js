import React from 'react';
import './Product.css';
import SizeButton from './SizeButton/SizeButton';

const Product = ({ productData }) => (
    <li className='singleProduct'>
        <img src={productData.imageSrc} alt={productData.alt} />
        <p className='productName'>
            {productData.name}
        </p>
        <p className='productPrice'>
            {productData.price} zł
        </p>
        <div className='sizes'>
            <p>
                available sizes:
            </p>
            <div>
                {productData.sizes.map((e, i) => {
                    return <SizeButton value={e} key={i} />
                })}
                {/* //         v-for="(size,index) in product.sizes" 
                //   : key=index
                //   v-bind:class="{'clickedButton': chosenSize === size}"
                //     v-on:click='choseSize(size)'>
                //     {{ size }} */}

            </div>
        </div>
        <button className='addProduct'>
            Add product
        </button>
    </li >
);

export default Product