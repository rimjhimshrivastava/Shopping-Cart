import React from "react";
import './Header.css'

const Header = (props) => {
    return (
        <div className="header">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="count-items">{props.cartCount()}</span>
        </div>
    )
}

export default Header;