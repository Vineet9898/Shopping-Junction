import React from "react";
import SideNav from "./SideNav";
import Nav from "./Nav";
import Addusers from "./svgAssets/Addusers";
import Allbookings from "./svgAssets/Allbookings";
import UsersList from "./svgAssets/UsersList";
import Reports from "./svgAssets/Reports";

import {NavLink} from "react-router-dom";
const Bookings = () => {
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
                    My Orders
                      </p>
                    </div>
                  </div>
                </div>
              </dl>
            </div>
         
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3">
            <NavLink to="/AddBookings">
              <div className=" overflow-hidden shadow-lg mt-3 hover:bg-indigo-600 rounded-2xl">
                <div className="px-6 py-4">
                  <div className=" mt-3 flex flex-row justify-center pt-10">
                    <Addusers />
                  </div>
                  <div className="font-bold text-center text-xl mb-2 pt-4">
                    Add Booking
                  </div>
                </div>
              </div>
            </NavLink>

            <NavLink to="/mybookings">
              <div className=" overflow-hidden shadow-lg mt-3 hover:bg-indigo-600 rounded-2xl">
                <div className="px-6 py-4">
                  <div className=" mt-3 flex flex-row justify-center pt-10">
                    <UsersList />
                  </div>
                  <div className="font-bold text-center text-xl mb-2 pt-4">
                    My Bookings
                  </div>
                </div>
              </div>
            </NavLink>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3">
            <NavLink to="/Allbookings">
              <div className=" overflow-hidden shadow-lg mt-3 hover:bg-indigo-600 rounded-2xl">
                <div className="px-6 py-4">
                  <div className=" mt-3 flex flex-row justify-center pt-10">
                    <Allbookings />
                  </div>
                  <div className="font-bold text-center text-xl mb-2 pt-4">
                    All Bookings
                  </div>
                </div>
              </div>
            </NavLink>

            <NavLink to="/reports">
              <div className=" overflow-hidden shadow-lg mt-3 hover:bg-indigo-600 rounded-2xl">
                <div className="px-6 py-4">
                  <div className=" mt-3 flex flex-row justify-center pt-10">
                    <Reports />
                  </div>
                  <div className="font-bold text-center text-xl mb-2 pt-4">
                    Reports
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bookings;
