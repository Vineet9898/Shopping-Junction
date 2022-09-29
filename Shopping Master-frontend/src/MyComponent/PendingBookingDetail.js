import React, { useEffect, useState, useRef } from "react";
import Nav from "./Nav";
import { useLocation } from "react-router-dom";
import { base_Url_BookingService } from "../api/bootapi";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const PendingBookingDetail = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [showModall, setShowModall] = React.useState(false);
  const [pendingDetail, setPendingDetail] = useState({});

  const isLoaded = useRef(true);
  const search = useLocation().search;
  const [updatedData, setUpdatedData] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded.current) {
      isLoaded.current = false;
      const name = new URLSearchParams(search).get("id");
      getAllPendingDetailsFromServer(name);
    }
  });

  const getAllPendingDetailsFromServer = (data) => {
    axios
      .get(`${base_Url_BookingService}/booking/${data}`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then(
        (response) => {
          console.log(response.data);
          setPendingDetail(response.data);
          setUpdatedData(response.data);
          console.log(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const updateDataToServer = (data) => {
    axios
      .put(`${base_Url_BookingService}/servicereq`, data, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then(
        (response) => {
          console.log("data sent to server");
          toast.success("Updated Sucessfully");

          navigate(`/Pendings`);
        },
        (error) => {
          console.log("error");
        }
      );
  };

  //function to delete user
  const deleteBooking = (id) => {
    console.log(id + " this is id");
    // pendingDetail.id
    axios
      .delete(`${base_Url_BookingService}/servicereq/delete/${id}`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then(
        (response) => {
          console.log(response);
          toast.success("Your Order was cancelled Sucessfully");
          navigate(`/Pendings`);
          // update(id);
        },
        (error) => {
          console.log("error");
          toast.error("Something went wrong");
        }
      );
  };

  // form handle for update

  const handleForm = (e) => {
    //  console.log(updatedData);
    // console.log(updatedData);
    // console.log(e);
    // setUser(...user, regdDate:)
    updateDataToServer(updatedData);
    e.preventDefault();
    // e.nativeEvent.stopImmediatePropagation();
  };

  return (
    <>
      <Nav />

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Pending Order Booking Details
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Thanks for your patience, your Order will be delivered to you soon
          </p>
        </div>
      </div>



      <div className="grid grid-cols-2 divide-x">
        <div className="flex justify-center m-2 bg-white">

          <img
            className="block w-auto"
            src={`${pendingDetail.imgurl}`}
            alt={`${pendingDetail.product}`}
          />




        </div>
        

          <div className="flex">


            <div className="h-screen flex-1 w-64 w-auto">
              {/* <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3"> */}



              <div className="border-t border-gray-200">
                <dl>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Product Name</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {pendingDetail.product}
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Cost</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Rs.{pendingDetail.cost} only/-
                    </dd>
                  </div>

                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                    Order Booking Date
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {pendingDetail.reqDate}
                    </dd>
                  </div>

                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Order Booking Date
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {pendingDetail.status}
                    </dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Delivery Address</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {pendingDetail.address}
                    </dd>
                  </div>

                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      {" "}
                     Payment Method
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {pendingDetail.paymentmethod}
                    </dd>
                  </div>

                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500"></dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <div className="flex mt-8 flex-col flex-wrap items-center justify-center w-full px-7 lg:flex-row lg:justify-end md:justify-end gap-x-4 gap-y-4">
                        <button
                          className="bg-white border-indigo-700 rounded hover:bg-gray-50 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-indigo-700 border lg:max-w-[95px]  w-full "
                          onClick={() => setShowModall(true)}
                        >
                          Update
                        </button>

                        {showModall ? (
                          <>
                            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                  {/*header*/}
                                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                      Update Order Details
                                    </h3>

                                    <button
                                      className=" p-1 ml-auto bg-transparent border-0  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                      onClick={() => setShowModall(false)}
                                    >
                                      <span className=" text-black hover:bg-red-500 rounded-2xl w-6 text-xl block outline-none focus:outline-none">
                                        x
                                      </span>
                                    </button>
                                  </div>
                                  {/*body*/}

                                  <div className="relative p-6 flex-auto">
                                    <form onSubmit={handleForm}>
                                      <div className="flex flex-no-wrap items-start">
                                        <div className="w-full ">
                                          <div className="bg-white rounded shadow  py-7">
                                            <div>
                                              <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-7 ">
                                                <div>
                                                  <p className="text-base font-medium leading-none text-gray-800">
                                                    Product Name
                                                  </p>
                                                  <div className="relative top-1">
                                                    <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
                                                      <input
                                                        className="relative flex items-center justify-between w-full px-5 py-4"
                                                        placeholder="Update Problem"
                                                        type="text"
                                                        name="product"
                                                        id="product"
                                                        value={pendingDetail.product}
                                                        disabled
                                                        required
                                                        onChange={(e) => {
                                                          setUpdatedData({
                                                            ...updatedData,
                                                            product:
                                                              e.target.value,
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
                                                    Update Payment Method
                                                  </p>
                                                  <div className="relative top-1">
                                                    <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
                                                      <select
                                                        name="paymentmethod"
                                                        id="paymentmethod"
                                                        required
                                                        onChange={(e) => {
                                                          setUpdatedData({
                                                            ...updatedData,
                                                            paymentmethod:
                                                              e.target.value,
                                                          });
                                                        }}
                                                        className="form-select appearance-none relative flex items-center justify-between w-full px-5 py-4"
                                                        aria-label="Default select example"
                                                      >
                                                        <option selected>
                                                          Click here to choose
                                                          from below options
                                                        </option>
                                                        <option value="Cash On Delivery">
                                                      Cod
                                                        </option>

                                                        <option value=" Upi">
                                                       Upi
                                                        </option>
                                                        <option value="Debit card">
                                                        Debit card
                                                        </option>
                                                        <option value="Credit Card">
                                                       Credit Card
                                                        </option>

                                                        <option value="Delivered">
                                                          Delivered
                                                        </option>
                                                      </select>
                                                    </div>
                                                  </div>
                                                </div>

                                                <div>
                                                  <p className="text-base font-medium leading-none text-gray-800">
                                                    Update Status
                                                  </p>
                                                  <div className="relative top-1">
                                                    <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
                                                      <select
                                                        name="status"
                                                        id="status"
                                                        required
                                                        onChange={(e) => {
                                                          setUpdatedData({
                                                            ...updatedData,
                                                            status:
                                                              e.target.value,
                                                          });
                                                        }}
                                                        className="form-select appearance-none relative flex items-center justify-between w-full px-5 py-4"
                                                        aria-label="Default select example"
                                                      >
                                                        <option selected>
                                                          Click here to choose
                                                          from below options
                                                        </option>

                                                        <option value="Delivered">
                                                          Delivered
                                                        </option>
                                                      </select>
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
                                                        placeholder="Update Problem Description"
                                                        type="text"
                                                        name="description"
                                                        id="description"
                                                        required
                                                        disabled
                                                        value={
                                                          updatedData.cost
                                                        }
                                                        onChange={(e) => {
                                                          setUpdatedData({
                                                            ...updatedData,
                                                            cost:
                                                              e.target.value,
                                                          });
                                                        }}
                                                      />
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="flex mt-8 flex-col flex-wrap items-center justify-center w-full px-7 lg:flex-row lg:justify-end md:justify-end gap-x-4 gap-y-4">
                                              <input
                                                type="button"
                                                value="Cancel"
                                                className="bg-white border-indigo-700 rounded hover:bg-gray-50 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-indigo-700 border lg:max-w-[95px]  w-full "
                                                onClick={() =>
                                                  setShowModall(false)
                                                }
                                              ></input>

                                              <input
                                                value="Submit"
                                                type="submit"
                                                className="bg-indigo-700 rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full"
                                              ></input>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        ) : null}

                        <button
                          className="bg-indigo-700 rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full "
                          onClick={() => setShowModal(true)}
                        >
                          Cancel Order
                        </button>
                        {showModal ? (
                          <>
                            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                  <button
                                    className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={() => setShowModal(false)}
                                  >
                                    <span className="bg-transparent text-gray-400 hover:bg-gray-600 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                      X
                                    </span>
                                  </button>

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
                                      Are you sure to cancel this Order?
                                    </h3>

                                    <NavLink
                                      to=""
                                    //   " /productlist"
                                    >
                                      <button
                                        data-modal-toggle="popup-modal"
                                        type="button"
                                        className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                                        onClick={() => {
                                          setShowModal(false);

                                          deleteBooking(pendingDetail.id);
                                        }}
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
                      </div>
                    </dd>
                  </div>
                </dl>
              </div>

            </div>
          </div>

        


      </div>


    </>
  );
};
export default PendingBookingDetail;
