"use client";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useContext } from "react";
import { LoginContext } from "@/context/login.context";
import { SERVER_URL } from "@/api/url";
const Layout = ({ children }: any) => {
  const [user, setUser]: any = useContext(LoginContext);
  useEffect(() => {
    async function checkRefreshToken() {
      const response = await fetch(`${SERVER_URL}/user/refresh_token`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setUser({ accessToken: data.accessToken });
      console.log(data);
    }
    checkRefreshToken();
  }, []);
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
