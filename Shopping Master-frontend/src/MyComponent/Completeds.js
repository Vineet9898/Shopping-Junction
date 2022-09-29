import React, { useState, useRef, useEffect } from "react";
import Nav from "./Nav";
import CompletedBookingComponent from "./CompletedBookingComponent";
import axios from "axios";
import NoData from "./NoData";
import { base_Url_BookingService } from "../api/bootapi";

const Completeds = () => {
  const isLoaded = useRef(true);

  const [completedBooking, setCompletedBooking] = useState([]);
  useEffect(() => {
    if (isLoaded.current) {
      isLoaded.current = false;
      getAllCompletedBookingFromServer();
    }
  }, []);

  //GET api FROM SERVER
  const getAllCompletedBookingFromServer = () => {
    axios
      .get(
        `${base_Url_BookingService}/servicereq/request/${localStorage.getItem(
          "adminId"
        )}/Delivered`
      )
      .then(
        (response) => {
          console.log(response.data);
          setCompletedBooking(response.data);
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

      <div className="flex">
     

        <div className="  flex-1 h-auto">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="border-t border-gray-200">
              <dl>
                <div className="w-auto  overflow-hidden">
                  <div className="px-4 md:px-10 py-1 md:py-4 bg-gray-100 rounded-tl-lg rounded-tr-lg">
                    <div className="sm:flex items-center justify-between">
                      <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                        Completed Bookings
                      </p>
                    </div>
                  </div>
                </div>
              </dl>
            </div>
          </div>
          <div className="p-5 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {completedBooking.length > 0 ? (
              completedBooking.map((item) => (
                <CompletedBookingComponent
                  key={item.id}
                  completedBooking={item}
                />
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
export default Completeds;
