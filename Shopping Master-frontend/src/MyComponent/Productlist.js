import React, { useState, useEffect, useRef } from "react";
import NoData from "./NoData";

import Nav from "./Nav";
import axios from "axios";

import { base_Url_ProductManagement } from "../api/bootapi";
import ProductComponent from "./ProductComponent";

const Productlist = () => {
  const isLoaded = useRef(true);

  //GET api FROM SERVER
  const getAllProductsFromServer = () => {
    axios
      .get(`${base_Url_ProductManagement}/product`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then(
        (response) => {
          // console.log(response.data);
          setProducts(response.data);

          console.log(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  let token;
  useEffect(() => {
    if (isLoaded.current) {
      isLoaded.current = false;
      getAllProductsFromServer();
    }
  }, []);

  const [products, setProducts] = useState([]);

  return (
    <>
      <Nav />

      <div className="flex">
       

        <div className="  flex-1 h-auto">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="border-t border-gray-200">
              <dl>
                <div className="w-auto  overflow-hidden">
                  <div className="px-4 md:px-10 py-1 md:py-4 bg-gray-100 rounded-tl-lg rounded-tr-lg">
                    <div className="sm:flex items-center justify-between">
                      <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                        All Products
                      </p>
                    </div>
                  </div>
                </div>
              </dl>
            </div>
          </div>
          <div className="p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {products.length > 0 ? (
              products.map((items) => (
                <ProductComponent key={items.id} product={items} />
              ))
            ) : (
              <NoData />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Productlist;
