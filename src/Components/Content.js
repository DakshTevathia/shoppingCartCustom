import React, { useContext } from "react";
import "../App.css";
import { CartContext } from "../Store/Context.js";
import Item from "./Item";

const Content = ({ selected, searchQuery }) => {
  const {
    state: { products },
  } = useContext(CartContext);
  let displayProducts = products;
  //filter products based on the selected State
  if (selected.ascendingChosen) {
    displayProducts.sort((a, b) => a.price - b.price);
  }

  if (selected.descendingChosen) {
    displayProducts.sort((a, b) => b.price - a.price);
  }

  if (selected.inStockChosen) {
    displayProducts = displayProducts.filter((ele) => {
      return ele.availableItems[0] !== 0;
    });
  }
  if (selected.fastDeliveryChosen) {
    displayProducts = displayProducts.filter((ele) => {
      return ele.fastDelivery === true;
    });
  }

  if (searchQuery) {
    displayProducts = displayProducts.filter((prod) => {
      return prod.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }

  return (
    <div className="content">
      <div className="contentGrid">
        {displayProducts.map((product) => (
          <Item product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Content;
