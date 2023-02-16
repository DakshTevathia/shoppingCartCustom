import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../Store/Context";

const Item = ({ product }) => {
  const [added, setAdded] = useState(false);
  let { state, dispatch } = useContext(CartContext);
  useEffect(() => {}, [added]);
  const addClicked = (product) => {
    console.log(product);
    //dispatch Add to cart action with the product as payload
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  const removeClicked = (id) => {
    console.log(id);
    //dispatch remove product's id and delete element in cart state of that ID
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };
  return (
    <div className="item">
      <img src={product.image} alt="some img"></img>
      <h3>{product.name}</h3>
      <p>Rs. {product.price}</p>
      <span>Rating: {product.rating}</span>
      <span>Quick Delivery: {product.fastDelivery ? "Yes" : "No"}</span>

      {added ? (
        <button
          onClick={() => {
            setAdded((added) => !added);
            removeClicked(product.id);
          }}
          style={{ backgroundColor: "red", color: "white" }}
        >
          Remove from Cart
        </button>
      ) : (
        <button
          onClick={() => {
            setAdded((added) => !added);
            addClicked(product);
          }}
          style={{ backgroundColor: "blue", color: "white" }}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default Item;
