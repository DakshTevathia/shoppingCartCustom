import React, { useContext } from "react";
import "../App.css";
import { CartContext } from "../Store/Context.js";
import Item from "./Item";

const Content = () => {
  const {
    dispatch,
    state: { products },
  } = useContext(CartContext);
  return (
    <div className="content">
      <div className="contentGrid">
        {products.map((product) => (
          <Item product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Content;
