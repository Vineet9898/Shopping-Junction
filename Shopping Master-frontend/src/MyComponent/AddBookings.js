import React, { useState } from "react";
import { useEffect } from "react";
import SideNav from "./SideNav";
import Nav from "./Nav";
import axios from "axios";
import { base_Url_BookingService } from "../api/bootapi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const AddBookings = () => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + "-" + mm + "-" + dd;

  const [booking, setBooking] = useState({
    status: "pending",
    reqDate: today,
    adminId: localStorage.getItem("adminId"),
  });
  useEffect(() => {});

  const handleForm = (e) => {
    addBookingData(booking);
    e.preventDefault();
  };

  const navigate = useNavigate();

  //Get API For Backend
  const addBookingData = (data) => {
    axios
      .post(`${base_Url_BookingService}/servicereq`, data, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then(
        (response) => {
          console.log("Yes data is added");
          toast.success("Yes data is added");
          navigate(`/bookings`);
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

        <div className="h-screen flex-1 w-64 w-auto  ">
          <form onSubmit={handleForm}>
            <div className="w-full ">
              <div className="bg-white rounded shadow  py-7">
                <div className="mt-10 px-7">
                  <p className="text-xl font-semibold leading-tight text-gray-800">
                    Add Bookings
                  </p>
                  <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-7 ">
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800">
                        Product ID
                      </p>

                      <div className="relative top-1 ">
                        <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
                          <input
                            className="relative flex items-center justify-between w-full px-5 py-4"
                            placeholder="Product ID "
                            type="number"
                            name="productId"
                            id="productId"
                            required
                            onChange={(e) => {
                              setBooking({
                                ...booking,
                                productId: e.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="text-base font-medium leading-none text-gray-800">
                        Enter User ID
                      </p>
                      <div className="relative top-1">
                        <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
                          <input
                            className="relative flex items-center justify-between w-full px-5 py-4"
                            placeholder="User ID"
                            type="number"
                            name="userId"
                            id="userId"
                            required
                            onChange={(e) => {
                              setBooking({
                                ...booking,
                                userId: e.target.value,
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
                        Request Date
                      </p>
                      <div className="relative top-1">
                        <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
                          <input
                            className="relative flex items-center justify-between w-full px-5 py-4"
                            placeholder="mm/dd/yyyy"
                            type="date"
                            value={today}
                            disabled
                            name="reqDate"
                            id="reqDate"
                            onChange={(e) => {
                              setBooking({
                                ...booking,
                                reqDate: e.target.value,
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
                        Problem
                      </p>

                      <div className="relative top-1 ">
                        <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
                          <select
                            name="problem"
                            id="problem"
                            required
                            onChange={(e) => {
                              setBooking({
                                ...booking,
                                problem: e.target.value,
                              });
                            }}
                            className="form-select appearance-none 


                        relative flex items-center justify-between w-full px-5 py-4
      "
                            aria-label="Default select example"
                          >
                            <option selected>
                              Click here to choose from below options
                            </option>
                            <option value=" General repair">General </option>
                            <option value="Repair"> Repair</option>
                            <option value="Service">Support</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="text-base font-medium leading-none text-gray-800">
                        Description
                      </p>
                      <div className="relative top-1">
                        <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
                          <textarea
                            className="relative flex items-center justify-between w-full px-5 py-4"
                            placeholder="type problem"
                            type="text"
                            name="description"
                            id="description"
                            required
                            onChange={(e) => {
                              setBooking({
                                ...booking,
                                description: e.target.value,
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
                        Status
                      </p>
                      <div className="relative top-1">
                        <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
                          <input
                            className="relative flex items-center justify-between w-full px-5 py-4"
                            placeholder="User ID"
                            value="Pending"
                            type="text"
                            name="status"
                            id="status"
                            required
                            onChange={(e) => {
                              setBooking({
                                ...booking,
                                status: e.target.value,
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
                  </div>
                </div>

                <div className="flex mt-8 flex-col flex-wrap items-center justify-center w-full px-7 lg:flex-row lg:justify-end md:justify-end gap-x-4 gap-y-4">
                  <button className="bg-white border-indigo-700 rounded hover:bg-gray-50 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-indigo-700 border lg:max-w-[95px]  w-full ">
                    Cancel
                  </button>
                  <button className="bg-indigo-700 rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full ">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddBookings;
