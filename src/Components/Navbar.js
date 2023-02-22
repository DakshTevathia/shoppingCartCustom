import "../App.css";
import { BsCart } from "react-icons/bs";
import React, { useContext } from "react";
import { CartContext } from "../Store/Context";
const Navbar = (props) => {
  const { state } = useContext(CartContext);
  const searching = (e) => {
    props.passToParent(e.target.value);
  };

  return (
    <div className="header">
      <div className="navbar">
        <h2>Some Ecommmerce Site</h2>
        <input type="search" onChange={searching} />
        <div className="cartIcon" onClick={() => props.cartClicked()}>
          <BsCart />
          {state.cart.length}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
