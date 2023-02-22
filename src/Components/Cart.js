import CartItem from "./CartItem";
import React, { useContext } from "react";
import { CartContext } from "../Store/Context";

const Cart = (props) => {
  const { state } = useContext(CartContext);
  let totalPrice = 0;
  state.cart.map((ele) => {
    return (totalPrice += ele.price * ele.qty);
  });
  return (
    <>
      <div style={{ textAlign: "right", marginBottom: "10px" }}>
        <button className="closeButton" onClick={() => props.cartClicked()}>
          X
        </button>
      </div>
      <div className="cartDiv">
        {state.cart.length === 0 ? (
          <h2>Cart Empty. Please add some items and continue to checkout.</h2>
        ) : (
          <div className="overflowClass">
            {state.cart.map((cartEle) => (
              <CartItem key={cartEle.id} cartEle={cartEle} />
            ))}
          </div>
        )}
      </div>
      {state.cart.length !== 0 && (
        <div className="flexOrder">
          <h3> Total:{totalPrice}</h3>
          <button>Order Now</button>
        </div>
      )}
    </>
  );
};

export default Cart;
