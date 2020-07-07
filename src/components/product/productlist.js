import React, { Component } from "react";
import { ProductConsumer } from "../../context";
import Product from './product';

export default class productlist extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <ProductConsumer>
            {(data) => {
              return data.products.map((product) => {
                return <Product key={product.id} product={product} />;
              });
            }}
          </ProductConsumer>
        </div>
      </div>
    );
  }
}
