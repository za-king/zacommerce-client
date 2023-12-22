"use client";
import { useState, useEffect } from "react";
import { SERVER_URL } from "@/api/url";

const useCategoryHook = () => {
  const [categoryData, setCategoryData] = useState<any>([]);
  const getAllCategory = async () => {
    try {
      const response = await fetch(`${SERVER_URL}/category`);
      const jsonResponese = await response.json();
      setCategoryData(jsonResponese.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);
  return { categoryData };
};

export default useCategoryHook;
