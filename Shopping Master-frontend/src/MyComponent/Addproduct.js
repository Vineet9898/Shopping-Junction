import React, { useState } from "react";
import { useEffect } from "react";
import SideNav from "./SideNav";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { base_Url_ProductManagement } from "../api/bootapi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Addproduct = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = React.useState(false);

  useEffect(() => {});

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + "-" + mm + "-" + dd;
const [product, setProduct] = useState({ createdDate: today });

  const handleForm = (e) => {
    addProductData(product);
    e.preventDefault();
  };

  //Get API For Backend
  const addProductData = (data) => {
    console.log(data);
    axios
      .post(`${base_Url_ProductManagement}/product`, data, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then(
        (response) => {
          toast.success("Added Successfully");
          navigate("/products");
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <>
      <Nav />

      <div className="flex">
        {/* <SideNav className="flex-none w-52  h-max" /> */}

        <div className="  flex-1 h-auto">
          <form onSubmit={handleForm}>
            <div className="pr-10  pb-5 overflow-x-hidden overflow-y-hidden grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 ">
              <div className=" ">
                <div className="flex flex-no-wrap items-start">
                  <div className="w-full ">
                    <div className="">
                      <div className="bg-white rounded shadow  py-7">
                        <div className="mt-10 px-7">
                          <p className="text-xl font-semibold leading-tight text-gray-800">
                            Enter Product Details
                          </p>
                          <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-7 ">
                            <div>
                              <p className="text-base font-medium leading-none text-gray-800">
                                Enter Product Name
                              </p>
                              {/*-Dropdown*/}
                              <div className="relative top-1 ">
                                <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
                                  <input
                                    className="relative flex items-center justify-between w-full px-5 py-4"
                                    placeholder="Enter Product Name"
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    onChange={(e) => {
                                      setProduct({
                                        ...product,
                                        name: e.target.value,
                                      });
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                            <div>
                              <p className="text-base font-medium leading-none text-gray-800">
                                Enter Model
                              </p>
                              <div className="relative top-1">
                                <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
                                  <input
                                    className="relative flex items-center justify-between w-full px-5 py-4"
                                    placeholder="Enter Model"
                                    type="text"
                                    id="model"
                                    name="model"
                                    required
                                    onChange={(e) => {
                                      setProduct({
                                        ...product,
                                        model: e.target.value,
                                      });
                                    }}
                                  />

                                  <div
                                    className="absolute right-0 z-20 hidden w-full px-1 py-2 bg-white border-t border-gray-200 rounded shadow top-12"
                                    id="drop-down-div-one"
                                  ></div>
                                </div>
                              </div>
                            </div>

                            <div>
                              <p className="text-base font-medium leading-none text-gray-800">
                                Cost
                              </p>
                              <div className="relative top-1">
                                <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
                                  <input
                                    className="relative flex items-center justify-between w-full px-5 py-4"
                                    placeholder="Cost"
                                    type="number"
                                    id="cost"
                                    name="cost"
                                    required
                                    onChange={(e) => {
                                      setProduct({
                                        ...product,
                                        cost: e.target.value,
                                      });
                                    }}
                                  />

                                  <div
                                    className="absolute right-0 z-20 hidden w-full px-1 py-2 bg-white border-t border-gray-200 rounded shadow top-12"
                                    id="drop-down-div-one"
                                  ></div>
                                </div>
                              </div>
                            </div>

                            <div>
                              <p className="text-base font-medium leading-none text-gray-800">
                                Make
                              </p>
                              <div className="relative top-1">
                                <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
                                  <input
                                    className="relative flex items-center justify-between w-full px-5 py-4"
                                    placeholder="Make"
                                    type="text"
                                    id="make"
                                    name="make"
                                    required
                                    onChange={(e) => {
                                      setProduct({
                                        ...product,
                                        make: e.target.value,
                                      });
                                    }}
                                  />

                                  <div
                                    className="absolute right-0 z-20 hidden w-full px-1 py-2 bg-white border-t border-gray-200 rounded shadow top-12"
                                    id="drop-down-div-one"
                                  ></div>
                                </div>
                              </div>
                            </div>



                            <div>
                                                <p className="text-base font-medium leading-none text-gray-800">
                                                 Category Id
                                                </p>
                                                <div className="relative top-1">
                                                  <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
                                                    <select
                                                      id="cid"
                                                      name="cid"
                                                      required
                                                      onChange={(e) => {
                                                        setProduct({
                                                          ...product,
                                                          cid: e.target.value,
                                                        });
                                                      }}
                                                      className="form-select appearance-none relative flex items-center justify-between w-full px-5 py-4"
                                                      aria-label="Default select example"
                                                    >
                                                      <option selected>
                                                        Click here to choose
                                                        from below options
                                                      </option>

                                                      <option value="1">Smart Phones</option>
                                                      <option value="2">Laptops</option>
                                                      <option value="3">Furniture</option>
                                                      <option value="4">Books</option>
                                                      <option value="5">Grocery Store</option>
                                                      <option value="6">Fashion</option>
                                                      
                                                      
                                                      
                                                    </select>
                                                  </div>
                                                </div>
                                              </div>


                                             

                            <div>
                              <p className="text-base font-medium leading-none text-gray-800">
                                Image Url
                              </p>
                              <div className="relative top-1">
                                <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
                                  <input
                                    className="relative flex items-center justify-between w-full px-5 py-4"
                                    placeholder="Make"
                                    type="text"
                                    id="imgurl"
                                    name="imgurl"
                                    required
                                    onChange={(e) => {
                                      setProduct({
                                        ...product,
                                        imgurl: e.target.value,
                                      });
                                    }}
                                  />

                                  
                                </div>
                              </div>
                            </div>

                 
                            <input
                              hidden
                              disabled
                              placeholder="Date"
                              type="date"
                              id="createdDate"
                              name="createdDate"
                              value={today}
                              required
                              onChange={(e) => {
                                setProduct({
                                  ...product,
                                  cost: e.target.value,
                                });
                              }}
                            />
                          </div>
                        </div>

                        <div className="flex mt-8 flex-col flex-wrap items-center justify-center w-full px-7 lg:flex-row lg:justify-end md:justify-end gap-x-4 gap-y-4">
                          <button
                            className="bg-white border-indigo-700 rounded hover:bg-gray-50 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-indigo-700 border lg:max-w-[95px]  w-full "
                            onClick={() => setShowModal(true)}
                          >
                            Cancel
                          </button>

                          {showModal ? (
                            <>
                              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                  {/*content*/}
                                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}

                                    {/* <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t"> */}

                                    <button
                                      className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                      onClick={() => setShowModal(false)}
                                    >
                                      <span className="bg-transparent text-gray-400 hover:bg-gray-600 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                        X
                                      </span>
                                    </button>
                                    {/* </div> */}

                                    <div className="p-6 text-center">
                                      <svg
                                        className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        ></path>
                                      </svg>
                                      <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                        Are you sure you want to go back?
                                      </h3>

                                      <NavLink to="/products">
                                        <button
                                          data-modal-toggle="popup-modal"
                                          type="button"
                                          className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                                          onClick={() => setShowModal(false)}
                                        >
                                          Yes, I'm sure
                                        </button>
                                      </NavLink>

                                      <button
                                        data-modal-toggle="popup-modal"
                                        type="button"
                                        className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                        onClick={() => setShowModal(false)}
                                      >
                                        No, cancel
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                            </>
                          ) : null}

                          <button className="bg-indigo-700 rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full ">
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Addproduct;
