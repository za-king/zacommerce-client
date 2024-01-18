"use client";
import Layout from "@/components/Layout";
import Image from "next/image";
import { useEffect } from "react";
function Profile() {
  useEffect;
  return (
    <Layout>
      <div className="h-screen container py-24 ">
        <div className=" border-2 bg- rounded-lg shadow-lg">
          <div className="text-xl text-center font-bold my-4">Profile</div>

          <div className="avatar w-full px-12 pb-12 justify-center">
            <div className="w-24 rounded-full">
              <Image
                src={
                  "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                }
                alt="i"
                width={100}
                height={100}
              />
            </div>
          </div>
          <form action="" className="mx-12">
            <input
              type="email"
              placeholder="email"
              className="input input-bordered  w-full  mb-2"
              value={"muhammadzakysyukur@gmail.com"}
            />
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered  w-full mb-2"
              value={"muhammad zaky syukur"}
            />

            <input
              type="text"
              placeholder="Phone"
              className="input input-bordered  w-full mb-2"
              value={"0851551515"}
            />

            <textarea
              className="textarea textarea-bordered w-full mb-2"
              placeholder="Address"
              value={"address...."}
            />

            <button className="btn btn-primary mb-4">Post Product</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
