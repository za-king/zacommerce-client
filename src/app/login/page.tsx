"use client";
import Layout from "@/components/Layout";
import { useState } from "react";
import { useLogin } from "../../hook/useLogin.hook";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { LoginContext } from "@/context/login.context";
function Login() {
  const [email, setEmail] = useState<string>("userbaru@gmail.com");
  const [password, setPassword] = useState<string>("userbaru");
  const [user, setUser]: any = useContext(LoginContext);
  const router = useRouter();
  const handleClickLogin = async () => {
    useLogin({ email, password }).then((res) => {
      if (res.accessToken) {
        setUser(res);
        console.log(res);
      } else {
        console.log(res.error);
      }
    });
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
            <button
              className="btn btn-neutral"
              onClick={() => {
                handleClickLogin();
              }}
            >
              <span className="loading loading-spinner"></span>
              Login
            </button>

            {/* <button className="btn">
              <span className="loading loading-spinner"></span>
              signin with google
            </button> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
