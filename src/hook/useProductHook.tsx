"use client";
import { useState, useEffect } from "react";

import React from "react";

const useProductHook = () => {
  const [productData, setProductData] = useState<any>([]);

  const useGetAllProduct = async () => {
    try {
      const response = await fetch("http://localhost:4000/product");
      const jsonResponese = await response.json();
      //   setProductData(data);
      setProductData(jsonResponese.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    useGetAllProduct();
  }, []);
  return { productData };
};

export default useProductHook;
