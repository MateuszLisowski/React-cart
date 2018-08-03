import React, { Component } from "react";
import "./Products.css";
import { connect } from "react-redux";
import Product from "./Product/Product";
import PropTypes from "prop-types";

export class Products extends Component {
  render() {
    return (
      <ul className="productsWrapper">
        {this.props.products.map(currentElemenent => {
          return (
            <Product productData={currentElemenent} key={currentElemenent.id} />
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  products: state.productInformations
});

Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default connect(mapStateToProps,null)(Products);
