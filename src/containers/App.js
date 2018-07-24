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

// const mapStateToProps = state => {
//   return {
//       products: state.productInformations
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//       onAddedPerson: (name, age) => dispatch({type: actionTypes.ADD_PERSON, personData: {name: name, age: age}}),
//       onRemovedPerson: (id) => dispatch({type: actionTypes.REMOVE_PERSON, personId: id})
//   }
// };

export default connect(null, null)(App);
