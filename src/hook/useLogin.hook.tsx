import { redirect } from "next/navigation";
import { SERVER_URL } from "@/api/url";

type UseLoginProp = {
  email: string;
  password: string;
};

const useLogin = async ({ email, password }: UseLoginProp) => {
  const response = await fetch(`${SERVER_URL}/user/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const data = await response.json();
  return data;
};

const useLogout = async () => {
  const response = await fetch(`${SERVER_URL}/user/logout`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  sessionStorage.removeItem("user");
};

export { useLogin, useLogout };
