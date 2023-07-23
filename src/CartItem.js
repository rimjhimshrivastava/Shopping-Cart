import React from "react";
import './CartItem.css'

//Camel Case is used in react
const CartItem = (props)=> {
    const {img, price, title, qty} = props.product;
    return(
        <div className="cart-item"> 
            <div className="item-left">
                <img src={img} alt="" className="item-image"  />
            </div>
            <div className="item-right">
                <h3>{title}</h3>
                <div>{price}</div>
                <div>Qty: {qty}</div>
                <div className="item-buttons">
                    {/* we must bind the value of 'this' to the functions 
                    can be done by using:
                    function().bind(this)
                    or by using arrow function that automatically binds the value of 'this' to function
                    */}
                <i className="fa-solid fa-plus" onClick={() => props.increaseQty(props.product)}></i>
                <i className="fa-solid fa-minus" onClick={() => props.decreaseQty(props.product)}></i> 
                <i className="fa-solid fa-trash" onClick={() => props.deleteProduct(props.product)}></i>
                </div>
            </div>
        </div>
    );
}

export default CartItem;