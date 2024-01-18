"use client";
import { createContext, useState, useEffect } from "react";
import { SERVER_URL } from "@/api/url";
export const LoginContext = createContext({});

const initialState = {};
export default function UserContextProvider({ children }: any) {
  const [user, setUser] = useState<any>(initialState);

  return (
    <LoginContext.Provider value={[user, setUser]}>
      {children}
    </LoginContext.Provider>
  );
}
