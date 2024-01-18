"use client";
import { createContext, useReducer } from "react";

type AppActions = {
  type:
    | "ADD_TO_CART"
    | "REMOVE_FROM_CART"
    | "DECREASE_CART"
    | "GET_TOTAL"
    | "CLEAR_CART";
  payload?: number | any | undefined;
};

type IProduct = {
  cartQuantity: any;
  categoryId: number;
  createdAt: string;
  description: string;
  id: number;
  image: string;
  name: string;
  price: number;
  rating: number;
  stock: number;
  updatedAt: string;
  userId: number;
};

interface StateApp {
  total: number;
  quantity: number;
  cartItems: IProduct[];
}

const initialState = {
  total: 0,
  quantity: 0,
  cartItems: [],
};

const cartReducer = (state: StateApp, action: AppActions): any => {
  switch (action.type) {
    case "ADD_TO_CART":
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (cartItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, cartQuantity: item.cartQuantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [
            ...state.cartItems,
            { ...action.payload, cartQuantity: 1 },
          ],
        };
      }

    case "REMOVE_FROM_CART":
      let newCart = [...state.cartItems];

      const index = state.cartItems.findIndex(
        (Items) => Items.id === action.payload.id
      );
      newCart.splice(index, 1);
      if (index >= 0) {
        newCart.splice(index, 1);
      }
      return { ...state, cartItems: newCart };

    case "DECREASE_CART":
      const newCartItems = [...state.cartItems];
      const itemIndex = newCartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      // if item is not in cart, don't update the state
      if (itemIndex === -1) {
        return { ...state };
      }

      const newItem = { ...newCartItems[itemIndex] };
      newItem.cartQuantity--;
      newCartItems[itemIndex] = newItem;

      // if the decremented item quantity is 0, remove the item
      if (newCartItems[itemIndex].cartQuantity === 0) {
        newCartItems.splice(itemIndex, 1);
      }

      return { ...state, cartItems: newCartItems };
    case "GET_TOTAL":
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.quantity = quantity;
      state.total = total;
    case "CLEAR_CART":

    default:
      return state;
  }
};

export const CartContext = createContext(initialState);

export default function CartProvider({ children }: any) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product: IProduct) => {
    if (false) {
      dispatch({
        type: "ADD_TO_CART",
        payload: product,
      });
      getTotals();
    } else {
      alert("login firts");
    }
  };

  const decreaseCart = (product: IProduct) => {
    dispatch({
      type: "DECREASE_CART",
      payload: product,
    });
    getTotals();
  };

  const removeFromCart = (product: IProduct) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: product,
      },
    });
    getTotals();
  };

  const getTotals = () => {
    dispatch({
      type: "GET_TOTAL",
      payload: {},
    });
  };

  const clearCart = (product: IProduct) => {
    dispatch({
      type: "CLEAR_CART",
      payload: {
        products: "",
      },
    });
  };

  const value = {
    total: state.total,
    cartItems: state?.cartItems,
    quantity: state.quantity,
    addToCart,
    removeFromCart,
    decreaseCart,
    clearCart,
    getTotals,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
