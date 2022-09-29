import React, { useState, useEffect, useRef } from "react";
import Nav from "./Nav";
import SideNav from "./SideNav";
import AllBookingComponent from "./AllBookingComponent";
import axios from "axios";
import { base_Url_BookingService } from "../api/bootapi";
import NoData from "./NoData";
const AllBookings = () => {
  
  const [allBooking, setAllBooking] = useState({
    // {
    //   id: 101,
    //   productId: 1,
    //   userId: 1,
    //   problem: "PROBLEM1",
    //   reqDate: "REQUEST date1",
    //   description: "description2",
    //   status: "Completed",
    // },
  });

  const isLoaded = useRef(true);

  //GET api FROM SERVER
  const getAllProductsFromServer = () => {
    axios
      .get(`${base_Url_BookingService}/servicereq`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then(
        (response) => {
          // console.log(response.data);
          setAllBooking(response.data);

          console.log(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  useEffect(() => {
    if (isLoaded.current) {
      isLoaded.current = false;
      getAllProductsFromServer();
    }
  }, []);

  return (
    <>
      <Nav />
      <div className="flex">
        {/* <SideNav className="flex-none w-52  h-max" /> */}

        <div className="h-screen flex-1 w-64 w-auto">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="border-t border-gray-200">
              <dl>
                <div className="w-auto  overflow-hidden">
                  <div className="px-4 md:px-10 py-1 md:py-4 bg-gray-100 rounded-tl-lg rounded-tr-lg">
                    <div className="sm:flex items-center justify-between">
                      <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                        All Bookings
                      </p>
                    </div>
                  </div>
                </div>
              </dl>
            </div>
          </div>

          <div className=" flex-1 h-auto">
            <div className="p-5 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
              {allBooking.length > 0 ? (
                allBooking.map((item) => (
                  <AllBookingComponent key={item.id} allBooking={item} />
                ))
              ) : (
                <NoData />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AllBookings;
