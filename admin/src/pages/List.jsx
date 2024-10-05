import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendURl, currency } from "../App";
import { toast } from "react-toastify";

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendURl + "/api/product/list");
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const removeProduct = async (productId) => {
    try {
      const answer = window.confirm("do you want deleted?");
      if (answer) {
        const response = await axios.post(
          backendURl + "/api/product/remove",
          { productId },
          { headers: { token } }
        );
        if (response.data.success) {
          toast.success(response.data.message);
          await fetchList();
        } else {
          toast.error(response.data.message);
        }
      } else {
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    fetchList();
  }, []);
  return (
    <>
      <p className="mb-2">All Products List</p>
      <div className="flex flex-col gap-2">
        {/* List Table Title  */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>
        {/* ---------- Product List --------- */}
        {list
          .sort((a, b) => b.date - a.date)
          .map((product, index) => (
            <div
              className="grid  grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm"
              key={index}
            >
              <img className="w-12" src={product.image[0]} alt="" />
              <p>{product.name}</p>
              <p>{product.category}</p>
              <p>
                {currency}
                {product.price}
              </p>
              <p
                className="text-right md:text-center cursor-pointer text-lg"
                onClick={() => removeProduct(product._id)}
              >
                X
              </p>
            </div>
          ))}
      </div>
    </>
  );
};

export default List;
