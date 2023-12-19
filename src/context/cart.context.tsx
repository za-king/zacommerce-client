"use client";
import { createContext, useReducer } from "react";

type AppActions = {
  type: "ADD_TO_CART" | "REMOVE_FROM_CART" | "UPDATE_PRICE";
  payload?: number | any;
};

type ProductProp = {
  id: number;
  // name: string;
  // price: number;
  // description: string;
  // rating: 3;
  // image: string;
  // stock: number;
  // categoryId: string;
  // userId: string;
  // createdAt: string;
  // updatedAt: string;
};

const initialState = {
  total: 0,
  products: [],
};

const cartReducer = (
  state: typeof initialState,
  action: AppActions
): typeof initialState => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      console.log("ADD_TO_CART", payload);
      return { ...state, products: payload.products };
    case "REMOVE_FROM_CART":
      console.log("REMOVE_FROM_CART", payload);
      return {
        ...state,
        products: payload.products,
      };
    case "UPDATE_PRICE":
      console.log("UPDATE_PRICE", payload);
      return {
        ...state,
        total: payload.total,
      };
    default:
      throw new Error(`No case for type ${type} found in shopReducer.`);
  }
};

export const CartContext = createContext(initialState);

export default function CartProvider({ children }: any) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const updatePrice = (products: any) => {
    let total = 0;
    products.forEach((product: any) => (total += product.price));

    dispatch({
      type: "UPDATE_PRICE",
      payload: {
        total,
      },
    });
  };

  const addToCart = (product: any) => {
    const updatedCart = state.products.concat(product);
    updatePrice(updatedCart);

    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedCart,
      },
    });
  };

  const removeFromCart = (product: any) => {
    const updatedCart = state.products.filter(
      (currentProduct) => currentProduct.id !== product.id
    );
    updatePrice(updatedCart);

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedCart,
      },
    });
  };

  const value = {
    total: state.total,
    products: state.products,
    addToCart,
    removeFromCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
