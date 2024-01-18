"use client";
import Layout from "@/components/Layout";
import { useContext, useEffect } from "react";
import { CartContext } from "@/context/cart.context";
import CardCart from "@/components/CardCart";
function Checkout() {
  const { cartItems, total, getTotals, quantity }: any =
    useContext(CartContext);
  useEffect(() => {
    getTotals();
  }, [getTotals]);
  console.log(cartItems);
  return (
    <Layout>
      <div className="min-h-screen container py-12  ">
        <div className="border rounded-lg p-4 grid grid-cols-2 justify-items-center">
          <div>
            {cartItems.map((product: any, index: number): any => {
              return (
                <CardCart product={product} key={index} showButton={"hidden"} />
              );
            })}
          </div>

          <div className=" w-full h-screen bg-base-100 shadow-xl sticky top-12">
            <div className="card-body">
              <h2 className="card-title">Set amounts </h2>
              <div className="flex justify-between">
                <div>quantity</div> <div>{quantity}</div>
              </div>
              <div className="flex justify-between">
                <div>subtotal</div> <div>Rp {total}</div>
              </div>
              <button className="btn btn-primary">Pay Now</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Checkout;
