import { redirect } from "next/navigation";

import Notification from "@/components/Notification";
type UseLoginProp = {
  email: string;
  password: string;
};

const useLogin = async ({ email, password }: UseLoginProp) => {
  const response = await fetch("http://localhost:4000/user/login", {
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

  if (!data.accessToken) {
    redirect("/login");
  }
};

export { useLogin };
