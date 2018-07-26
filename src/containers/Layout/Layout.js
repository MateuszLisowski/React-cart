import React, { Component } from 'react';
import './Layout.css';
import { connect } from 'react-redux';
import Products from '../Products/Products';
import Cart from '../../components/Cart/Cart';
import Filters from '../Filters/Filters';
import { buyItems, removeItem } from '../../store/actions';

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
      buyItems: () => dispatch(buyItems()),
      removeItem: (elementIndex) => dispatch(removeItem(elementIndex))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
