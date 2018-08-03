import React, { Component } from 'react';
import './Layout.css';
import { connect } from 'react-redux';
import Products from '../Products/Products';
import Cart from '../../components/Cart/Cart';
import Filters from '../Filters/Filters';
import { buyItems, removeItem } from '../../store/actions';
import PropTypes from 'prop-types';

export class App extends Component {
  state = {
    isCartVisible: false
  }

  hideCart = () => {
    this.setState({ isCartVisible: false });
  }

  showCart = () => {
    this.setState({ isCartVisible: true });
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

const mapStateToProps = state => ({
    cartItems: state.cartItems
});

const mapDispatchToProps = dispatch => ({
    buyItems: () => dispatch(buyItems()),
    removeItem: (elementIndex) => dispatch(removeItem(elementIndex))
});

App.propTypes = {
  buyItems: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
