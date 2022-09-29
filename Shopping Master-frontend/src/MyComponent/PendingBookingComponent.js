import React from "react";
import { NavLink } from "react-router-dom";
const PendingBookingComponent = ({ pendingBooking }) => {
  return (
    <>
      <NavLink to={`/pendingbookingdetail?id=${pendingBooking.id}`}>
        <div className=" bg-slate-100 rounded-xl p-8 md:p-0 bg-white-800 hover:bg-blue-700  hover:text-white ">
          <div className="flex flex-col align-top justify-start flex-wrap pt-6 md:p-8 text-center md:text-left space-y-4">
            <div>
              <p className="text-lg font-bold">{pendingBooking.product}</p>
            </div>
            <div className="font-bold">
              <div className="text-gray-400 ">Order Date:{pendingBooking.reqDate}</div>
              <div className="flex flex-row justify-end  flex-wrap text-lg font-size text-3xl  font-extrabold">
             Order Price Rs.{pendingBooking.cost}
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
};
export default PendingBookingComponent;
