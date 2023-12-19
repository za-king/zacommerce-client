"use client";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import CardCategory from "@/components/CardCategory";
import useProductHook from "@/hook/useProductHook";
export default function Home() {
  const { productData } = useProductHook();

  return (
    <Layout>
      <div className="min-h-screen lg:container my-12">
        <Hero />
        <div className="flex justify-between w-full my-12">
          <CardCategory />
          <CardCategory />
          <CardCategory />
          <CardCategory />
          <CardCategory />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6">
          {productData.map((product: any, index: number) => {
            return <Card product={product} key={index} />;
          })}
        </div>

        <div className="carousel carousel-end rounded-box my-12">
          <div className="carousel-item cursor-pointer">
            <img
              src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
              alt="Drink"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
              alt="Drink"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
              alt="Drink"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
              alt="Drink"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
              alt="Drink"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
              alt="Drink"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
              alt="Drink"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
