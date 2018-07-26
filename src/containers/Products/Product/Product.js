import React, { Component } from 'react';
import './Product.css';
import SizeButton from '../../../components/Products/SizeButton/SizeButton';
import Aux from '../../../hoc/Aux';
import { connect } from 'react-redux';
import { addItemToCart } from '../../../store/actions';

class Product extends Component {
    state = {
        clickedSizeButton: null
    }

    setSize = (size) => {
        const isCurrentlyClicked = size === this.state.clickedSizeButton ? null : size
        this.setState({clickedSizeButton: isCurrentlyClicked});
    }
    
    render() {
        const { productData } = this.props
        const { clickedSizeButton } = this.state
        const isShow = productData.isVisible ? 
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
                    {productData.sizes.map((size, index) => {
                        return <SizeButton isClicked={clickedSizeButton === size ? 'clickedButton' : ''} value={size} key={index} click={() => this.setSize(size)}/>
                    })}
                </div>
            </div>
            <button className='addProduct' onClick={() => this.props.addItemToCart(productData, clickedSizeButton)}>
                Add product
            </button>
        </li> : null
        return (
        <Aux>
            {isShow}
        </Aux>          
        );
      }   
    }
    
const mapDispatchToProps = dispatch => {
    return {
        addItemToCart: (addedProduct, chosenSize) => dispatch(addItemToCart(addedProduct, chosenSize))
    }
};

export default connect(null, mapDispatchToProps)(Product);