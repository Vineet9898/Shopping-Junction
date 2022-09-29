import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { base_Url_ProductManagement } from "../api/bootapi";

//GET api FROM SERVER
const getAllProductsFromServer = () => {
  axios
    .get(`${base_Url_ProductManagement}/pro/cat/`, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    })
    .then(
      (response) => {
        // console.log(response.data);
        // setProducts(response.data);

        // console.log(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
};

 
const CategoryComponent = ({ Categories }) => {
  return (
    <>
    {/* http://localhost:9000/pro/cat/?categoryid=1 */}
       <NavLink to={`/productlist?categoryid=${Categories.categoryId}`}> 
        <div className=" bg-slate-100 rounded-xl p-8 md:p-0 bg-white-800 hover:bg-blue-700  hover:text-white ">
          <div className="flex flex-col align-top justify-start flex-wrap pt-6 md:p-8 text-center md:text-left space-y-4">
            <div>
              <p className="text-lg font-bold">Title:{Categories.categoryTitle}</p>
            </div>
            <div className="font-bold">
              <div className="text-gray-400 ">Description:{Categories.categoryDesc} </div>

            </div>
          </div>
        </div>
       </NavLink> 
    </>
  );
};

export default CategoryComponent;
