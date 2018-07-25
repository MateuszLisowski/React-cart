import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';
import Products from '../components/products/Products';
import Cart from '../components/Cart/Cart';
import Filters from '../components/Filters/Filters';


class App extends Component {
  state = {
    isCartVisible: false
  }

  hideCart = () => {
    this.setState({isCartVisible: false});
  }

  showCart = () => {
    this.setState({isCartVisible: true});
  }

  render() {
    return (
      <div className="App">
        <Cart 
            isCartVisible={this.state.isCartVisible} 
            showCart={this.showCart} 
            hideCart={this.hideCart} 
            cartItems={this.props.cartItems}
            buyItems={this.props.buyItems}
            removeItem={this.props.removeItem}
          />
        <header>
        </header>
        <main>
          <Filters />
          <Products />
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      cartItems: state.cartItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
      addItemToCart: (addedProduct) => dispatch({type: actionTypes.ADD_ITEM_TO_CART, addedProduct: addedProduct}),
      buyItems: () => dispatch({type: actionTypes.BUY_ITEMS}),
      removeItem: (elementIndex) => dispatch({type: actionTypes.REMOVE_CART_ITEM, elementIndex: elementIndex})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
