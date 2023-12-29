import React from "react";
import { useRouter } from "next/navigation";
const CardCategory = ({ category }: any) => {
  const router = useRouter();
  return (
    <div
      className="card shadow-lg cursor-pointer"
      onClick={() => {
        router.push(`/category/${category?.name}`);
      }}
    >
      <div className="card-body">
        <div className="card-value font-bold text-xl">{category?.name}</div>
      </div>
    </div>
  );
};

export default CardCategory;
