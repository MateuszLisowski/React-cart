import React, { Component } from 'react';
import './Products.css';
import { connect } from 'react-redux';
//import * as actionTypes from '../store/actions';
import Product from './Product/Product';


class Products extends Component {
  render() {
    return (
      <ul>
        {this.props.products.map((currentElemenent,index) => {
          return <Product productData={currentElemenent} key={currentElemenent.id} />
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
      products: state.productInformations
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//       onAddedPerson: (name, age) => dispatch({type: actionTypes.ADD_PERSON, personData: {name: name, age: age}}),
//       onRemovedPerson: (id) => dispatch({type: actionTypes.REMOVE_PERSON, personId: id})
//   }
//};

export default connect(mapStateToProps, null)(Products);
