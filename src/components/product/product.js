import React, { Component } from "react";

export default class product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return <div  className="col-9 mx-auto col-md-6 col-lg-3 my-3" >
        <div className="card">
<div className="img-container p-5">
    
</div>

        </div>

    </div>;
  }
}
