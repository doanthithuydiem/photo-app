import React from "react";
import { useResolvedPath } from "react-router-dom";

Cart.propTypes = {};

function Cart(props) {
  const match = useResolvedPath("").pathname;

  return <div> cart page</div>;
}

export default Cart;