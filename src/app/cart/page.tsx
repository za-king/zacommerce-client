"use client";
import Layout from "@/components/Layout";
import CardCart from "@/components/CardCart";
import { useContext } from "react";
import { CartContext } from "@/context/cart.context";

function Cart() {
  const { products, total } = useContext(CartContext);

  console.log(products, total);
  return (
    <Layout>
      <div className="min-h-screen container py-12  ">
        <div className="border rounded-lg p-4 grid grid-cols-2 justify-items-center">
          <div>
            {products.map((product: any, index: number) => {
              return <CardCart product={product} key={index} />;
            })}
          </div>

          <div className=" w-full h-screen bg-base-100 shadow-xl sticky top-12">
            <div className="card-body">
              <h2 className="card-title">Set amounts </h2>

              <div className="flex justify-between">
                <div>subtotal</div> <div>{total}</div>
              </div>
              <button className="btn btn-primary">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Cart;
