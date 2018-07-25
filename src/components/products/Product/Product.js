import React, { Component } from 'react';
import './Product.css';
import SizeButton from './SizeButton/SizeButton';
import Aux from '../../../hoc/Aux';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';

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

const mapStateToProps = state => {
    return {
        products: state.productInformations
    };
};
    
const mapDispatchToProps = dispatch => {
    return {
        addItemToCart: (addedProduct, chosenSize) => dispatch({type: actionTypes.ADD_ITEM_TO_CART, addedProduct: addedProduct, chosenSize: chosenSize})
    }
};

export default connect(null, mapDispatchToProps)(Product);