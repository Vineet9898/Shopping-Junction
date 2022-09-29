import React from "react";

import Nav from "./Nav";
import Addusers from "./svgAssets/Addusers";
import UsersList from "./svgAssets/UsersList";
import { NavLink } from "react-router-dom";
const Product = () => {
  return (
    <>
      <Nav />
      <div className="flex">
   

        <div className="h-screen flex-1  w-auto">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="border-t border-gray-200">
              <dl>
                <div className="w-auto  overflow-hidden">
                  <div className="px-4 md:px-10 py-1 md:py-4 bg-gray-100 rounded-tl-lg rounded-tr-lg">
                    <div className="sm:flex items-center justify-between">
                      <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                        Products
                      </p>
                    </div>
                  </div>
                </div>
              </dl>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 ml-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3">
            <NavLink to="/addproduct">
              <div className=" overflow-hidden shadow-lg mt-3 hover:bg-slate-400 border-black rounded-2xl">
                <div className="px-6 py-4">
                  <div className=" mt-3 flex flex-row justify-center pt-10">
                    <Addusers />
                  </div>
                  <div className="font-bold text-center text-xl mb-2 pt-4">
                    Add Product
                  </div>
                </div>
              </div>
            </NavLink>
            <NavLink to="/productlist">
              <div className=" overflow-hidden mr-5 shadow-lg mt-3 border-solid border-black hover:bg-slate-400 rounded-2xl">
                <div className="px-6 py-4">
                  <div className=" mt-3 flex flex-row justify-center pt-10">
                    <UsersList className="hover:text-white" />
                  </div>
                  <div className="font-bold text-center text-xl mb-2 pt-4">
                    Product list
                  </div>
                </div>
              </div>
            </NavLink>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 ml-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3">
          <NavLink to="/category">
              <div className=" overflow-hidden shadow-lg mt-3 hover:bg-slate-400 border-black rounded-2xl">
                <div className="px-6 py-4">
                  <div className=" mt-3 flex flex-row justify-center pt-10">
                  <UsersList className="hover:text-white" />
                  </div>
                  <div className="font-bold text-center text-xl mb-2 pt-4">
                  Product Category
                  </div>
                </div>
              </div>
            </NavLink>
            
            <NavLink to="/addcategory">
              <div className=" overflow-hidden mr-5 shadow-lg mt-3 hover:bg-slate-400 border-black rounded-2xl">
                <div className="px-6 py-4">
                  <div className=" mt-3 flex flex-row justify-center pt-10">
                    <Addusers className="hover:text-white" />
                  </div>
                  <div className="font-bold text-center text-xl mb-2 pt-4">
                 Add Product Category
                  </div>
                </div>
              </div>
            </NavLink>
          </div>

        </div>
      </div>
    </>
  );
};

export default Product;
