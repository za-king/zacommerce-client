"use client";
import { useState, useEffect } from "react";
import { SERVER_URL } from "@/api/url";
const useUserHook = () => {
  const [allUserData, setAllUserData] = useState<any>([]);

  const getAllUser = async () => {
    const responese = await fetch(`${SERVER_URL}/user`);
    const userData = await responese.json();
    setAllUserData(userData.data);
  };
  useEffect(() => {
    getAllUser();
  }, [allUserData]);
  return { allUserData };
};

export default useUserHook;
