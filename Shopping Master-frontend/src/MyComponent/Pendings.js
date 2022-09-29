import React, { useState, useRef, useEffect } from "react";
import Nav from "./Nav";
import PendingBookingComponent from "./PendingBookingComponent";
import SideNav from "./SideNav";
import NoData from "./NoData";
import axios from "axios";

import { base_Url_BookingService } from "../api/bootapi";

const Pending = () => {
  const [pendingBooking, setPendingBooking] = useState([]);

  const isLoaded = useRef(true);

  //GET api FROM SERVER
  const getAllPendingBookingFromServer = () => {
    axios
      .get(
        `${base_Url_BookingService}/servicereq/request/${localStorage.getItem(
          "adminId"
        )}/pending `
      )
      .then(
        (response) => {
          console.log(response.data);
          setPendingBooking(response.data);
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
      getAllPendingBookingFromServer();
    }
  }, []);

  
  return (
    <>
      <Nav />
      <div className="flex">
        {/* <SideNav className="flex-none w-52  h-max" /> */}
        <div className="  flex-1 h-auto">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="border-t border-gray-200">
              <dl>
                <div className="w-auto  overflow-hidden">
                  <div className="px-4 md:px-10 py-1 md:py-4 bg-gray-100 rounded-tl-lg rounded-tr-lg">
                    <div className="sm:flex items-center justify-between">
                      <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                        Pending Bookings
                      </p>
                    </div>
                  </div>
                </div>
              </dl>
            </div>
          </div>

          <div className="p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {pendingBooking.length > 0 ? (
              pendingBooking.map((item) => (
                <PendingBookingComponent key={item.id} pendingBooking={item} />
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
export default Pending;

// import React,{useState} from "react";
// import Nav from "./Nav";
// import SideNav from "./SideNav";

// const Pending = () => {

//   const [show, setShow] = useState(null)
//   return (
//     <>
//       <Nav />
//       <div className="flex">
//         <SideNav className="flex-none w-52  h-max" />

//         <div className="  flex-1 h-auto">
//             <div className="w-auto   overflow-hidden">
//                 <div className="px-4 md:px-10 py-1 md:py-4 bg-gray-100 rounded-tl-lg rounded-tr-lg">
//                     <div className="sm:flex items-center justify-between">
//                         <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Pending</p>

//                     </div>
//                 </div>
//                 <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-4 pb-5 overflow-y-auto ">
//                     <table className="w-full whitespace-nowrap">
//                         <thead>
//                             <tr className="h-14 w-full text-sm leading-none  text-gray-800">
//                                 <th className="font-bold  text-left pl-4">ProductID</th>
//                                 <th className="font-bold text-left pl-12">UserID</th>
//                                 <th className="font-bold text-left pl-12">Problem</th>
//                                 <th className="font-bold text-left pl-20">Request Date</th>
//                                     </tr>
//                         </thead>
//                         <tbody className="w-full">
//                             <tr className="h-16 text-sm  rounded-md leading-none text-gray-800 bg-white hover:bg-indigo-600  border-t border-gray-100 ">
//                                 <td className="pl-4 cursor-pointer">
//                                     <div className="flex items-center">

//                                     <p className="text-sm font-medium leading-none text-gray-800">P101</p>
//                                     </div>
//                                 </td>
//                                 <td className="pl-10">
//                                     <p className="text-sm font-medium leading-none text-gray-800">U101</p>

//                                 </td>
//                                 <td className="pl-12">
//                                     <p className=" text-sm font-medium">Damaged Charging Port</p>
//                                 </td>
//                                 <td className="pl-20">
//                                     <p className=" text-sm font-medium">03-07-2022</p>
//                                 </td>

//                             </tr>

//                             <tr className="h-16 text-sm leading-none text-gray-800 bg-white hover:bg-indigo-600 ">
//                                 <td className="pl-4 cursor-pointer">
//                                     <div className="flex items-center">

//                                     <p className="text-sm font-medium leading-none text-gray-800">P102</p>
//                                     </div>
//                                 </td>
//                                 <td className="pl-10">
//                                     <p className="text-sm font-medium leading-none text-gray-800">U102</p>

//                                 </td>
//                                 <td className="pl-12">
//                                     <p className="font-medium">Heating Issue</p>
//                                 </td>
//                                 <td className="pl-20">
//                                     <p className="font-medium">03-07-2022</p>
//                                 </td>

//                             </tr>

//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>

//       </div>
//     </>
//   );
// };
// export default Pending;
