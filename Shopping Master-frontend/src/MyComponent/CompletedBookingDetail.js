import React, { useState, useRef, useEffect } from "react";
import Nav from "./Nav";
import { useLocation } from "react-router-dom";
import { base_Url_BookingService } from "../api/bootapi";
import axios from "axios";

import { NavLink } from "react-router-dom";

const CompletedBookingDetail = () => {
  const [completeBookingDetails, setCompleteBookingDetails] = useState({});
  const search = useLocation().search;
  const isLoaded = useRef(true);
  useEffect(() => {
    if (isLoaded.current) {
      isLoaded.current = false;
      const name = new URLSearchParams(search).get("id");
      getResolvedBookingsDetailsFromServer(name);
      localStorage.setItem("id", name);
    }
  }, []);

  const getResolvedBookingsDetailsFromServer = (data) => {
    axios
      .get(`${base_Url_BookingService}/booking/${data}`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then(
        (response) => {
          console.log(response.data);

          setCompleteBookingDetails(response.data);
          console.log(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
  };
  return (
    <>
      <Nav />
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Delivered Order Details
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Order Details of your delivered Order
          </p>
        </div>
      </div>




      <div className="grid grid-cols-2 divide-x">
        <div className="flex justify-center m-2 bg-white">

          <img
            className="block w-auto"
            src={`${completeBookingDetails.imgurl}`}
            alt={`${completeBookingDetails.product}`}
          />




        </div>


        <div className="flex">
          <div className="h-screen flex-1 w-64 w-auto">
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Product Name</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {completeBookingDetails.product}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Cost</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Rs.{completeBookingDetails.cost} only/-
                  </dd>
                </div>

                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                  Order Booking Date
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {completeBookingDetails.reqDate}
                  </dd>
                </div>

                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                  Status
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {completeBookingDetails.status}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Method Of Payment</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {completeBookingDetails.paymentmethod}
                  </dd>
                </div>

                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    {" "}
                    Address
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {completeBookingDetails.address}
                  </dd>
                </div>

                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500"></dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <div className="flex mt-8 flex-col flex-wrap items-center justify-center w-full px-7 lg:flex-row lg:justify-end md:justify-end gap-x-4 gap-y-4">


                      <NavLink to="/Completeds">
                        <button className="bg-indigo-700 rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full ">
                          Go Back
                        </button>
                      </NavLink>
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
export default CompletedBookingDetail;
