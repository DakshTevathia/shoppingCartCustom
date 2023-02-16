import "../App.css";
import { BsCart } from "react-icons/bs";
import React, { useContext } from "react";
import { CartContext } from "../Store/Context";
const Navbar = (props) => {
  const { state } = useContext(CartContext);
  return (
    <div className="header">
      <div className="navbar">
        <h2>Some Ecommmerce Site</h2>
        <input type="search" />
        <div className="cartIcon" onClick={() => props.cartClicked()}>
          <BsCart />
          {state.cart.length}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
