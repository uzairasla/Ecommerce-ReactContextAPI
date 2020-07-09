import React, { Component } from "react";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotal";
import { ProductConsumer } from "../../context";
import EmptyCart from "./EmptyCart";
export default class Store extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <p className="display-4">Your Cart</p>
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} history={this.props.history} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
