"use client";
import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import useProductHook from "@/hook/useProductHook";
import { useRouter } from "next/navigation";
import Loading from "./Loading";
const Search = () => {
  const { useGetBySearchProduct, productBySearchData } = useProductHook();
  const [searchName, setSearchName] = useState<string | null>();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    useGetBySearchProduct(searchName);
    setLoading(false);
  }, [searchName]);

  return (
    <div className="mx-2">
      <button
        className="btn"
        onClick={() =>
          (
            document.getElementById("my_modal_1") as HTMLButtonElement | any
          ).showModal()
        }
      >
        <IoSearch />
      </button>
      <dialog id="my_modal_1" className="modal sm:modal-middle ">
        <div className="modal-box">
          <input
            type="text"
            placeholder="Search..."
            className="input input-bordered w-full  input-primary relative"
            onChange={(e) => {
              setSearchName(e.target.value);
            }}
          />
          <div className="my-4">
            {loading ? (
              <p>loading</p>
            ) : (
              <div>
                {productBySearchData.map((product: any) => {
                  return (
                    <div
                      className="shadow p-2 rounded cursor-pointer"
                      key={product.id}
                      onClick={() => {
                        router.push(`/product/${product.id}`);
                      }}
                    >
                      {product.name}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Search;
