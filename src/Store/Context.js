import React, { useReducer } from "react";
import { faker } from "@faker-js/faker";
import cartReducer from "./Reducer.js";

//we have used faker.js to create random data to populate our content

export const CartContext = React.createContext();

const Context = ({ children }) => {
  /*My simple way to create products*/
  let productsArray = [];

  for (let i = 0; i < 20; ++i) {
    productsArray.push({
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      fastDelivery: faker.datatype.boolean(),
      image: faker.image.image(),
      rating: faker.helpers.arrayElements([1, 2, 3, 4, 5], 1),
      availableItems: faker.helpers.arrayElements([1, 2, 3, 4, 5, 6, 7], 1),
    });
  }

  let initialState = { products: productsArray, cart: [] };

  const [state, dispatch] = useReducer(cartReducer, initialState);
  // Another Stylish way to create products
  //   const products = [...Array(20)].map(() => {
  //     return {
  //       id: faker.datatype.uuid(),
  //       name: faker.commerce.productName(),
  //       price: faker.commerce.price(),
  //       fastDelivery: faker.datatype.boolean(),
  //       image: faker.image.image(),
  //       rating: faker.helpers.arrayElements([1, 2, 3, 4, 5], 1),
  //     };
  //   });
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default Context;
