import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";

const Cart = (props) => {
  const { products } = props;
  return (
    <div className="cart">
      <h1>My Cart</h1>
      {products.map((product) => {
        return (
          <CartItem
            product={product}
            key={product.id}
            increaseQty={props.increaseQty}
            decreaseQty={props.decreaseQty}
            deleteProduct={props.deleteProduct}
          />
        );
      })}
      <h3>Total Amount: {props.totalCost()}</h3>
    </div>
  );
};

export default Cart;
