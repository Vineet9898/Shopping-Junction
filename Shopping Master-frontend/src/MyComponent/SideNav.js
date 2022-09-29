// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

// const SideNav = () => {
//   const [open, setOpen] = useState(true);
//   const Menus = [
//     { title: "Dashboard", src: "User", URL: "/user" },
//     { title: "Products", src: "Product", URL: "/products" },
//     { title: "Booking ", src: "Booking", URL: "/bookings" },
//     { title: "Profile", src: "Profile", URL: "/profile" },
//   ];

//   const navigation = [{}];

//   function classNames(...classes) {
//     return classes.filter(Boolean).join(" ");
//   }

//   return (
//     <>
//       <div className="flex w-52">
//         <div
//           className={` ${
//             open ? "w-72" : "w-20 "
//           } bg-white shadow-lg p-5 h-full min-h-full  rounded-lg pt-8 relative duration-300`}
//         >
//           <img
//             src={process.env.PUBLIC_URL + "assets/control.png"}
//             className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
//            border-2 rounded-full  ${!open && "rotate-180"}`}
//             onClick={() => setOpen(!open)}
//           />
//           <div className="flex gap-x-4 items-center">
//             <img
//               src={process.env.PUBLIC_URL + "assets/logo.png"}
//               className={`cursor-pointer duration-500 ${
//                 open && "rotate-[360deg]"
//               }`}
//             />
//             <h1
//               className={`text-white origin-left font-medium text-xl duration-200 ${
//                 !open && "scale-0"
//               }`}
//             ></h1>
//           </div>

//           <ul className="pt-6">
//             {Menus.map((Menu, index, URL) => (
//               <>
//                 <NavLink to={`${Menu.URL}`}>
//                   <li
//                     key={index}
                    
//                     className={`flex  rounded-md p-2 cursor-pointer hover:bg-indigo-600 text-white-300   text-md items-center gap-x-4 
//               ${Menu.gap ? "mt-9" : "mt-2"} ${
//                       index === 0 && "bg-light-white"
//                     } `}
//                   >
//                     <img src={`./assets/${Menu.src}.png`} />
//                     <span
//                       className={`${
//                         !open && "hidden"
//                       } font-semibold text-lg origin-left duration-200`}
//                     >
//                       {Menu.title}
//                     </span>
//                   </li>
//                 </NavLink>
//               </>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SideNav;
