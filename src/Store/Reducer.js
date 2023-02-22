const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":

      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((cartItem) => {
          return cartItem.id !== action.payload;
        }),
      };
    case "CHANGE_FROM_CART":
      let newCart = state.cart.filter((c) =>
        c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
      );
      return { ...state, cart: newCart };
    default:
      return state;
  }
};

export default cartReducer;
