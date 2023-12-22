"use client";
import CartComp from "@/components/CartComp";
import Layout from "@/components/Layout";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import useProductHook from "@/hook/useProductHook";
function ProductById() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { useGetByIdProduct, productByIdData } = useProductHook();

  useEffect(() => {
    const url = `${pathname}${searchParams}`;
    useGetByIdProduct(url);
  }, [pathname, searchParams]);
  return (
    <Layout>
      <div className="min-h-screen md:container py-20">
        <div className=" p-12 shadow-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 justify-items-center items-center">
          <div>
            <div className="w-96 carousel rounded-box">
              <div className="carousel-item w-full">
                <img
                  src={productByIdData[0]?.image}
                  className="w-full"
                  alt="Tailwind CSS Carousel component"
                />
              </div>
            </div>
          </div>
          <div className="p-4 w-full h-full ">
            <div className="mb-12">
              <h1 className="text-xl font-bold">{productByIdData[0]?.name}</h1>
              <h2>RP{productByIdData[0]?.price}</h2>
            </div>
            <p className="mb-12">{productByIdData[0]?.description}</p>

            <div className="flex justify-between border rounded-lg p-2">
              <div className="avatar online h-full">
                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={productByIdData[0]?.user?.image} />
                </div>
              </div>
              <div>
                <h1 className="font-bold">{productByIdData[0]?.user?.name}</h1>
                <p>Online kemarin</p>
              </div>

              <button className="btn btn-active">Follow</button>
            </div>
            <div>
              <CartComp product={productByIdData[0]} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProductById;
