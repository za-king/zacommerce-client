"use client";
import { CartContext } from "@/context/cart.context";
import { useContext } from "react";

const CardCart = ({ product }: any) => {
  const { decreaseCart, addToCart, removeFromCart }: any =
    useContext(CartContext);

  const handleDecreaseCart = async () => {
    await decreaseCart(product);
  };
  const handleAddToCart = async () => {
    await addToCart(product);
  };

  const handleRemoveFromCart = async () => {
    await removeFromCart(product);
  };

  if (product?.cartQuantity === undefined) {
    return null;
  }
  return (
    <div className="card card-side bg-base-100 shadow-xl m-2" key={product.id}>
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <div className="card-actions justify-end">
          <button
            className="btn btn-square btn-sm"
            onClick={handleRemoveFromCart}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <h2 className="card-title">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={handleDecreaseCart}>
            -
          </button>
          {product.cartQuantity}
          <button className="btn btn-primary" onClick={handleAddToCart}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCart;
