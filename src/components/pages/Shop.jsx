import React, { useEffect, useState } from "react";
import Product from "../Product";
import axios from "axios";

const Shop = () => {
  const [myProduct, setMyproduct] = useState([]);

  useEffect(() => {
    async function all() {
      let data = await axios.get("https://dummyjson.com/products");
      // .then((response) => console.log(response.data));
      setMyproduct(data.data.products);
    }
    all();
    
  }, []);
  return (
    <>
      <section className="py-10">
        <div className="container m-auto">
          <div className="grid grid-cols-3 gap-5">
            {myProduct.map((item) => (
              <div key={item.id} className="">
                <Product 
                  id={item.id}
                  thumbnail={item.thumbnail}
                  title={item.title}
                  description={item.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
