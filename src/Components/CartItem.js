import { isClickableInput } from "@testing-library/user-event/dist/utils";
import React, { useContext } from "react";
import { CartContext } from "../Store/Context";
import { BsTrash } from "react-icons/bs";

const CartItem = ({ cartEle }) => {
  const { state, dispatch } = useContext(CartContext);
  //get matching item and fetch it's quantity here
  const minusItem = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };
  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_FROM_CART",
      payload: { id: cartEle.id, qty: e.target.value },
    });
  };
  let options = [];
  for (let i = 1; i <= cartEle.availableItems[0]; ++i) {
    options.push(<option value={i}>{i}</option>);
  }

  return (
    <div>
      <div className="cartItem">
        <div>{cartEle.name}</div>
        <span>{cartEle.price}</span>
        <div className="cartOptions">
          <div
            onClick={() => {
              return minusItem(cartEle.id);
            }}
          >
            <BsTrash />
          </div>
          <select
            name="itemQuantitySelect"
            id="itemQuantitySelect"
            onChange={(e) => handleChange(e)}
          >
            {options.map((ele) => ele)}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
