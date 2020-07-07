import React, { Component } from "react";
import {
  storeProducts,
  detailProduct,
} from "./components/product/productDirectory";

const ProductContext = React.createContext();
class DataProvider extends Component {
  state = {
    products: storeProducts,
    productDetail: detailProduct
  };
  handleproductDetail = () => {};

  addtoCart = () => {};
  render() {
    return(
    <ProductContext.Provider
      value={{
        ...this.state,
        //handleDetail: this.handleproductDetail,
        //addtoCart: this.addtoCart
      }}
    >
      {this.props.children}
    </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;

export { DataProvider, ProductConsumer };
