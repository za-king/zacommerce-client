"use client";
import Layout from "@/components/Layout";
import TableUser from "@/components/TableUser";
import TableProduct from "@/components/TableProduct";
import useProductHook from "@/hook/useProductHook";
import useUserHook from "@/hook/useUser.hook";
function Admin() {
  const { productData } = useProductHook();
  const { allUserData } = useUserHook();
  return (
    <Layout>
      <div className="min-h-screen container py-24">
        <div className="my-12">
          <h1 className="font-bold text-xl text-center my-4">User</h1>
          <div>
            <TableUser users={allUserData} />
          </div>
        </div>

        <div className="my-12">
          <h1 className="font-bold text-xl text-center my-4">Product</h1>
          <div>
            <TableProduct products={productData} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Admin;
