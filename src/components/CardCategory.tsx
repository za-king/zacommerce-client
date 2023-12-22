import React from "react";

const CardCategory = ({ category }: any) => {
  return (
    <div className="card shadow-lg cursor-pointer">
      <div className="card-body">
        <div className="card-value font-bold text-xl">{category?.name}</div>
      </div>
    </div>
  );
};

export default CardCategory;
