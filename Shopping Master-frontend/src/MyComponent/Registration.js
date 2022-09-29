import React , { useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import ShoppingJunction from "./assets/ShoppingJunction.png";
import { base_Url_Authorization } from "../api/bootapi";
import axios from "axios";
const Registration = () => {
  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  const rndInt = randomIntFromInterval(120, 600)
  console.log(rndInt)
  
  
  
  const [registerationData, setregisterationData] = useState({id:rndInt});
  const handleForm = (e) => {
      console.log("this is working");
   
     
    registerData(registerationData);
    e.preventDefault();
    //e.nativeEvent.stopImmediatePropagation();
  };
  
  
  //Get API For Backend
  const registerData = (data) => {
    console.log(data);
    axios
      .post(`${base_Url_Authorization}/register`, data)
      .then(
        (response) => {
          toast.success("User Added Successfully");
        },
        (error) => {
          toast.error("Unable to add User!");
          console.log(error);
        }
      );
  };

  
  
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
          <div className="flex justify-center">
            <img
              className="w-20 h-20 text-blue-600"
              src={ShoppingJunction}
              alt="ShoppingJunctionlogo"
            />
          </div>
          <h3 className="text-2xl font-bold text-center">Join us</h3>
          <form  onSubmit={handleForm}>
            <div className="mt-4">
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  onChange={(e) => {
                    setregisterationData({ ...registerationData,username:e.target.value });
                  }}
               
               required />
              </div>
              <div className="mt-4">
                <input
                  type="tel"
                  placeholder="Mobile"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
               
                  onChange={(e) => {
                    setregisterationData({ ...registerationData,mobile:e.target.value });
                  }}
               required/>
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  onChange={(e) => {
                    setregisterationData({ ...registerationData,name:e.target.value });
                  }}
                
                
                required/>
              </div>
              <div className="mt-4">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  onChange={(e) => {
                    setregisterationData({ ...registerationData,password:e.target.value });
                  }}
                  
                  required/>
              </div>
              <div className="flex">
                <button className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                  Create Account
                </button>
              </div>
              <div className="mt-6 text-grey-dark">
                Already have an account?
                <NavLink to="/signin"> 
                <span className="text-blue-600 hover:underline" href="#">
                  Log in
                </span>
                </NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Registration;
