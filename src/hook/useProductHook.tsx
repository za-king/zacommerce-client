"use client";
import { useState, useEffect } from "react";
import { SERVER_URL } from "../api/url";

const useProductHook = () => {
  const [productData, setProductData] = useState<any>([]);
  const [productByIdData, setProductByIdData] = useState<any | null>({});

  const useGetAllProduct = async () => {
    try {
      const response = await fetch(`${SERVER_URL}/product`);
      const jsonResponese = await response.json();
      setProductData(jsonResponese.data);
    } catch (error) {
      console.log(error);
    }
  };
  const useGetByIdProduct = async (id: string) => {
    console.log();
    try {
      const response = await fetch(`${SERVER_URL}${id}`);
      const jsonResponese = await response.json();
      setProductByIdData(jsonResponese.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    useGetAllProduct();
  }, []);
  return { productData, productByIdData, useGetByIdProduct };
};

export default useProductHook;
