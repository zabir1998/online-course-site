import React from "react";


import "bootstrap/dist/css/bootstrap.min.css";

const Cart = (props) => {
  const cart = props.cart;
  const total = cart.reduce((total, crs) => total + crs.price, 0);

  return (
    <div>
      <h4>Order Summary: </h4>
      <br></br>
      <h3>Total Course Ordered:{cart.length}</h3>
        
      
      <br />
      <br />
      <h3>
        Total Price: {total} $
        
      </h3>
    </div>
  );
};

export default Cart;