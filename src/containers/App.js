import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';
import Products from '../components/products/Products';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Products />
      </div>
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
      onAddedPerson: (name, age) => dispatch({type: actionTypes.ADD_PERSON, personData: {name: name, age: age}}),
      onRemovedPerson: (id) => dispatch({type: actionTypes.REMOVE_PERSON, personId: id})
  }
};

export default connect(mapStateToProps, null)(App);
