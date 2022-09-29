import React from "react";
import { NavLink } from "react-router-dom";

const AllUserListComponent = ({ user }) => {
  return (
    <>
      <NavLink to={`/userdetail?id=${user.id}`}>
        <div className=" bg-slate-100 rounded-xl p-8 md:p-0 bg-white-800 hover:bg-blue-700  hover:text-white">
          <div className="flex flex-col align-top justify-start flex-wrap pt-6 md:p-8 text-center md:text-left space-y-4">
            <div>
              <p className="text-lg font-extrabold">{user.name}</p>
            </div>
            <div className="font-bold">
              <div className="text-sm font-semibold ">{user.mailId}</div>
              <div className="flex flex-row justify-end pt-8 flex-wrap text-lg font-size text-3xl  font-bold">
                +91{user.mobile}
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default AllUserListComponent;
