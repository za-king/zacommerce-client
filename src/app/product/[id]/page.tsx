import CartComp from "@/components/CartComp";
import Layout from "@/components/Layout";
import React from "react";

function ProductById() {
  return (
    <Layout>
      <div className="min-h-screen md:container py-12">
        <div className="card  bg-primary text-primary-content p-12 shadow-xl grid grid-cols-3 justify-items-center items-center">
          <div>
            <div className="w-96 carousel rounded-box">
              <div className="carousel-item w-full">
                <img
                  src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                  className="w-full"
                  alt="Tailwind CSS Carousel component"
                />
              </div>
              <div className="carousel-item w-full">
                <img
                  src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
                  className="w-full"
                  alt="Tailwind CSS Carousel component"
                />
              </div>
              <div className="carousel-item w-full">
                <img
                  src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                  className="w-full"
                  alt="Tailwind CSS Carousel component"
                />
              </div>
              <div className="carousel-item w-full">
                <img
                  src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
                  className="w-full"
                  alt="Tailwind CSS Carousel component"
                />
              </div>
              <div className="carousel-item w-full">
                <img
                  src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
                  className="w-full"
                  alt="Tailwind CSS Carousel component"
                />
              </div>
              <div className="carousel-item w-full">
                <img
                  src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
                  className="w-full"
                  alt="Tailwind CSS Carousel component"
                />
              </div>
              <div className="carousel-item w-full">
                <img
                  src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
                  className="w-full"
                  alt="Tailwind CSS Carousel component"
                />
              </div>
            </div>
          </div>
          <div className="h-full justify-between">
            <div className="mb-12"><h1 className="text-xl font-bold">Product Title</h1>
            <h2>RP.30.000</h2></div>
            <p className="mb-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              autem doloremque libero illum error maiores numquam ullam
              voluptate. Enim, eos. Nihil, delectus optio. Suscipit tempora in
              aperiam fugiat? Fugit, beatae.
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              autem doloremque libero illum error maiores numquam ullam
              voluptate. Enim, eos. Nihil, delectus optio. Suscipit tempora in
              aperiam fugiat? Fugit, beatae.
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              autem doloremque libero illum error maiores numquam ullam
              voluptate. Enim, eos. Nihil, delectus optio. Suscipit tempora in
              aperiam fugiat? Fugit, beatae.
            </p>

            <div className="flex justify-between border rounded-lg p-2">
              <div className="avatar online placeholder">
                <div className="bg-neutral text-neutral-content rounded-full w-12">
                  <span className="text-xl">AI</span>
                </div>
              </div>
              <div>
                <h1 className="font-bold">Sumo MX</h1>
                <p>Online kemarin</p>
              </div>

              <button className="btn btn-active">Follow</button>
            </div>
          </div>
          <div><CartComp/></div>
        </div>
      </div>
    </Layout>
  );
}

export default ProductById;
