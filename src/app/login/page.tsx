"use client";
import Layout from "@/components/Layout";
import { useState } from "react";
import { useLogin } from "../../hook/useLogin.hook";
import { useRouter } from "next/navigation";

function page() {
  const [email, setEmail] = useState<string>("test2@gmail.com");
  const [password, setPassword] = useState<string>("zaky1234");
  const router = useRouter();
  const handleClickLogin = () => {
    useLogin({ email, password });
  };
  return (
    <Layout>
      <div className="hero min-h-screen bg-base-200 ">
        <div className="card w-96 bg-base-100 shadow-xl ">
          <div className="card-body">
            <form action="">
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered w-full max-w-xs mb-2"
              />
              <input
                type="password"
                placeholder="password"
                className="input input-bordered w-full max-w-xs"
              />
            </form>
            <button className="btn btn-neutral" onClick={handleClickLogin}>
              <span className="loading loading-spinner"></span>
              Login
            </button>

            <button className="btn">
              <span className="loading loading-spinner"></span>
              signin with google
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default page;
