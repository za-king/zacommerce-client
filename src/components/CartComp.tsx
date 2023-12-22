import { FiMinus, FiPlus } from "react-icons/fi";
import { useContext, useEffect } from "react";
import { CartContext } from "@/context/cart.context";
const CartComp = ({ product }: any): any => {
  const { addToCart }: any = useContext(CartContext);
  console.log(product);

  const handleAddToCart = async () => {
    await addToCart(product);
  };

  return (
    <button className="btn btn-primary w-full my-12" onClick={handleAddToCart}>
      + Cart
    </button>
  );
};

export default CartComp;
