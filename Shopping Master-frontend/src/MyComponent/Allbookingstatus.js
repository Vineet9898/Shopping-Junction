import React, { useEffect, useState, useRef } from "react";
import SideNav from "./SideNav";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { base_Url_BookingService } from "../api/bootapi";
const Allbookingstatus = () => {
  const isLoaded = useRef(true);
  const search = useLocation().search;
  const [allBookingData, setAllBookingData] = useState({});

  useEffect(() => {
    if (isLoaded.current) {
      isLoaded.current = false;
      const name = new URLSearchParams(search).get("id");
      getAllReportDetailsFromServer(name);
    }
  }, []);

  const getAllReportDetailsFromServer = (data) => {
    axios
      .get(`${base_Url_BookingService}/booking/${data}`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then(
        (response) => {
          console.log(response.data);
          setAllBookingData(response.data);
          console.log(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  useEffect(() => {});

  return (
    <>
      <Nav />
      <div className="flex">
        {/* <SideNav className="flex-none w-52  h-max" /> */}

        <div className="h-screen flex-1 w-64 w-auto">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Booking Details
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Details of users of service now
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Product Id
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {allBookingData.productId}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">User ID</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {allBookingData.userId}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Problem</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {allBookingData.problem}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Description
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {allBookingData.description}
                  </dd>
                </div>

                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Request Date
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {allBookingData.reqDate}
                  </dd>
                </div>

                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500"></dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <div className="flex mt-8 flex-col flex-wrap items-center justify-center w-full px-7 lg:flex-row lg:justify-end md:justify-end gap-x-4 gap-y-4">
                      <NavLink to="/Allbookings">
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
export default Allbookingstatus;
