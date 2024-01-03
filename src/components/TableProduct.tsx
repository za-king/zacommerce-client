import React from "react";

const TableProduct = ({ products }: any) => {
  console.log(products);
  return (
    <div className="overflow-x-auto">
      <table className="table table-xs">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Price</th>
            <th>Desription</th>
            <th>Rating</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: any, index: number) => {
            return (
              <tr>
                <th>{index + 1}</th>
                <td>{product.name}</td>
                <td>Rp {product.price}</td>
                <td>{product.description}</td>
                <td>{product.rating}</td>
                <td>1{product.stock}</td>
                <td>
                  <button className="btn btn-xs btn-error">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableProduct;
