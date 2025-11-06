import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { FaStar } from "react-icons/fa6";

const ProductDetails = () => {
  const { id } = useParams();
  const [productFinal, setProductFinal] = useState({});
  useEffect(() => {
    async function all() {
      let singleProduct = await axios.get(
        `https://dummyjson.com/products/${id}`
      );
      setProductFinal(singleProduct.data);
    }

    all();
  }, []);

  return (
    <>
      <section className="py-5 ">
        <div className="container m-auto">
          <div className="p-5 bg-gray-300">
            <div className="">
              <img src={productFinal.thumbnail} alt="" className="" />
              <div className="flex items-center gap-x-2">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
              </div>
              <h3 className="text-4xl font-bold my-4">{productFinal.title}</h3>
              <p className="text-xl font-semibold pr-[350px]">
                {productFinal.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
