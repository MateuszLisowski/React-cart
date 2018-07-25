import React, { Component } from 'react';
import './Products.css';
import { connect } from 'react-redux';
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

export default connect(mapStateToProps, null)(Products);
