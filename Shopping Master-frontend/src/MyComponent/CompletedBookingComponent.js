import React from "react";
import { NavLink } from "react-router-dom";

const CompletedBookingComponent = ({ completedBooking }) => {
  return (
    <NavLink to={`/completedbookingdetail?id=${completedBooking.id}`}>
      <div className=" bg-slate-100 rounded-xl p-8 md:p-0 bg-white-800 hover:bg-blue-700  hover:text-white ">
        <div className="flex flex-col align-top justify-start flex-wrap pt-6 md:p-8 text-center md:text-left space-y-4">
          <div>
            <p className="text-lg font-bold">{completedBooking.product}</p>
          </div>
          <div className="font-bold">
            <div className="text-gray-400 ">{completedBooking.reqDate}</div>
            <div className="flex flex-row justify-end  flex-wrap text-lg font-size text-3xl  font-extrabold">
              {completedBooking.status}
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};
export default CompletedBookingComponent;
