import React from 'react';
import './SizeButton.css';

const SizeButton = ({ value }) => (
    <button>
            {value}
    </button>
);

export default SizeButton

//   {/* //         v-for="(size,index) in product.sizes" 
//                 //   : key=index
//                 //   v-bind:class="{'clickedButton': chosenSize === size}"
//                 //     v-on:click='choseSize(size)'>
//                 //     {{ size }} */}