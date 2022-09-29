import React from "react";
import Nav from "./Nav";
import UsersList from "./svgAssets/UsersList";
import { NavLink } from "react-router-dom";
export const Report = () => {
  return (
    <>
      <Nav />
      <div className="flex">
        <div className="h-screen flex-1  w-auto ">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="border-t border-gray-200">
              <dl>
                <div className="w-auto  overflow-hidden">
                  <div className="px-4 md:px-10 py-1 md:py-4 bg-gray-100 rounded-tl-lg rounded-tr-lg">
                    <div className="sm:flex items-center justify-between">
                      <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                        Reports Category
                      </p>
                    </div>
                  </div>
                </div>
              </dl>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3">
            <NavLink to="/savedreports">
              <div className=" overflow-hidden shadow-lg mt-3 hover:bg-indigo-600 rounded-2xl">
                <div className="px-6 py-4">
                  <div className=" mt-3 flex flex-row justify-center pt-10">
                    <UsersList />
                  </div>
                  <div className="font-bold text-center text-xl mb-2 pt-4">
                    My Reports
                  </div>
                </div>
              </div>
            </NavLink>
            <NavLink to="/allreports">
              <div className=" overflow-hidden shadow-lg mt-3 hover:bg-indigo-600 rounded-2xl">
                <div className="px-6 py-4">
                  <div className=" mt-3 flex flex-row justify-center pt-10">
                    <UsersList className="hover:text-white" />
                  </div>
                  <div className="font-bold text-center text-xl mb-2 pt-4">
                    All Reports
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
export default Report;
