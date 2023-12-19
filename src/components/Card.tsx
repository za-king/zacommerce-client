"use client";
import { CartContext } from "@/context/cart.context";
import { useContext } from "react";
const Card = ({ product }: any) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl cursor-pointer">
      <figure>
        <img src={product?.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
