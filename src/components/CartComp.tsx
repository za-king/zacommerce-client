import { FiMinus ,FiPlus } from "react-icons/fi";
const CartComp = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Set amounts </h2>
        <div className="flex border rounded-lg w-20 justify-between p-1">
          <button><FiMinus /></button> <input type="text" value={2} className="w-4 bg-transparent"/> <button><FiPlus/></button>
        </div>
        <div className="flex justify-between"><div>subtotal</div> <div>Rp7.000</div></div>
        <button className="btn btn-primary">Cart</button>
        <button className="btn btn-outline btn-primary">Buy Now</button>
      </div>
    </div>
  );
};

export default CartComp;
