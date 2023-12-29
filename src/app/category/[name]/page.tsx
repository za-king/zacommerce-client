"use client";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import useCategoryHook from "@/hook/useCategory.hook";
import { usePathname, useSearchParams } from "next/navigation";
function ProductByCategory() {
  const { getProductByCategory, productByCategoryData } = useCategoryHook();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    const url = `${pathname}/name`;
    getProductByCategory(url);
  }, []);
  console.log(productByCategoryData);
  return (
    <Layout>
      <div className=" container min-h-screen py-24">
        <h1 className="font-bold text-xl text-center my-4">
          {productByCategoryData[0]?.name}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6">
          {productByCategoryData[0]?.products.length === 0
            ? `product ${productByCategoryData[0]?.name} is empty`
            : productByCategoryData[0]?.products.map(
                (product: any, index: number) => {
                  return <Card product={product} key={index} />;
                }
              )}
          {}
        </div>
      </div>
    </Layout>
  );
}

export default ProductByCategory;
