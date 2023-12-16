import Layout from "@/components/Layout";
import CardCart from "@/components/CardCart";

function Cart() {
  return (
    <Layout>
      <div className="min-h-screen container py-12  ">
        <div className="border rounded-lg p-4 grid grid-cols-2 justify-items-center">
          <div>
            <CardCart />
            <CardCart />
            <CardCart />
            <CardCart />
          </div>

          <div className=" w-full h-screen bg-base-100 shadow-xl sticky top-12">
            <div className="card-body">
              <h2 className="card-title">Set amounts </h2>

              <div className="flex justify-between">
                <div>subtotal</div> <div>Rp7.000</div>
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
