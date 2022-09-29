import React from "react";
import { useState } from "react";
import ShoppingJunction from "./assets/ShoppingJunction.png"
import { NavLink } from "react-router-dom";
export const HomePage = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        className="bg-gray-100 pb-12 overflow-y-hidden"
        style={{ minHeight: 700 }}
      >
        <dh-component>
          <nav className="w-full border-b">
            <div className="py-5 md:py-0 container mx-auto px-6 flex items-center justify-between">
              <div aria-label="Home. logo" role="img">
                <img
                  className="block lg:hidden h-8 w-auto"
                  src={ShoppingJunction}
                  alt="ShoppingJunction logo"
                />

                <img
                  className="hidden lg:block h-12 w-auto"
                  src={ShoppingJunction}
                  alt="ShoppingJunction logo"
                />
              </div>
              <div>
                <button
                  onClick={() => setShow(!show)}
                  className={`${
                    show ? "hidden" : ""
                  } sm:block md:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500`}
                >
                  <svg
                    aria-haspopup="true"
                    aria-label="open Main Menu"
                    xmlns="http://www.w3.org/2000/svg"
                    className="md:hidden icon icon-tabler icon-tabler-menu"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    strokeLinecap="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={4} y1={8} x2={20} y2={8} />
                    <line x1={4} y1={16} x2={20} y2={16} />
                  </svg>
                </button>
                <div
                  id="menu"
                  className={` ${show ? "" : "hidden"} md:block lg:block `}
                >
                  <button
                    onClick={() => setShow(!show)}
                    className={`block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 z-30 top-0 mt-6`}
                  >
                    <svg
                      aria-label="close main menu"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1={18} y1={6} x2={6} y2={18} />
                      <line x1={6} y1={6} x2={18} y2={18} />
                    </svg>
                  </button>
                  <ul className="flex text-3xl md:text-base items-center py-10 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent z-20">
                    <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0"></li>
                    <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10"></li>
                    <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10"></li>
                    <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10"></li>
                    <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10"></li>
                  </ul>
                </div>
              </div>
              <NavLink to="/registration">
                <button className="focus:outline-none lg:text-lg lg:font-bold focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hidden md:block bg-transparent transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-8 py-1 sm:py-3 text-sm">
                  Registration
                </button>
              </NavLink>
            </div>
          </nav>
          <div className="bg-gray-100">
            <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
              <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
                  Get the Best Products From
                  <span className="text-indigo-700"> ShoppingJunction </span>
                  for your Needs
                </h1>
                <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">
                ShoppingJunction:The One-stop Shopping Destination. E-commerce is revolutionizing the way we all shop in India. Why do you want to hop from one store to another in ...
                  
                 
                </p>
              </div>
              <div className="flex justify-center items-center">
                <NavLink to="/user">
                  <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm">
                    Get Started
                  </button>
                </NavLink>
                <NavLink to="/signin">
                  <button className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-transparent transition duration-150 ease-in-out hover:border-indigo-600 lg:text-xl lg:font-bold  hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-10 py-2 sm:py-4 text-sm">
                    Sign In
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </dh-component>
      </div>

      <div className="xl:px-20 px-6 py-20 xl:mx-auto xl:container">
        <h1 className="xl:text-5xl md:text-4xl text-2xl font-semibold leading-tight text-center text-gray-800 sm:mb-0 mb-12">
          More Than 10 Years We Provide Quality Products
          <br className="md:block hidden" />
          For Your Needs
        </h1>
        <div className="md:mt-14 mt-4 relative sm:flex items-center justify-center">
          <img
            src="https://i.ibb.co/KjrPCyW/map.png"
          
            className="w-full xl:h-full h-96 object-cover object-fill sm:block hidden"
          />
          <img
            src="https://i.ibb.co/SXKj9Mf/map-bg.png"
          alt=""
            className="sm:hidden -mt-10 block w-full h-96 object-cover object-fill absolute z-0"
          />
          <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12">
            <p className="text-3xl font-semibold text-gray-800">20K+</p>
            <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
              Recently Products Ordered
            </p>
          </div>
          <div className="shadow-lg xl:p-6 p-4 w-48 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12">
            <p className="text-3xl font-semibold text-gray-800">8K+</p>
            <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
              Mobile Exchanges Made
            </p>
          </div>
          <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24">
            <p className="text-3xl font-semibold text-gray-800">15K+</p>
            <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
              Recently Delivered Products
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-20 flex flex-col items-center justify-center">
        <div className="xl:w-1/2 w-11/12">
          <h1
            role="heading"
            tabIndex={0}
            className="text-6xl font-bold 2xl:leading-10 leading-0 text-center text-gray-800"
          >
            Touching hundreds of lives
          </h1>
          <h2
            role="contentinfo"
            tabIndex={0}
            className="text-base leading-normal text-center text-gray-600 mt-5"
          >
           you can find inspiring and educational ideas from top brands and influencers, tailored to your interests
          </h2>
        </div>
        <div className="2xl:px-20 lg:px-12 px-4 flex flex-wrap items-start mt-4">
          <div className="mt-24">
            <div className="flex items-end ">
              <img
                tabIndex={0}
                src="https://i.ibb.co/kBgtHK6/Rectangle-5.png"
                alt="girl with blue background"
                className="w-20 h-20 rounded-lg mr-6"
              />
              <img
                tabIndex={0}
                src="https://i.ibb.co/9nLBtjx/Rectangle-3.png"
                alt="guy winking"
                className="w-48 h-36 rounded-lg"
              />
            </div>
            <div className="flex items-center justify-end my-6">
              <img
                tabIndex={0}
                src="https://i.ibb.co/jRbF1KF/Rectangle-4.png"
                alt="guy smiling"
              />
            </div>
            <div className="flex items-start">
              <img
                tabIndex={0}
                src="https://i.ibb.co/Sf4Q94L/Rectangle-6.png"
                alt="girl with bluw background"
                className="w-48 h-48 rounded-lg"
              />
              <img
                tabIndex={0}
                src="https://i.ibb.co/fnNqJrx/Rectangle-7.png"
                alt="guy with glasses"
                className="w-20 h-20 rounded-lg ml-6 flex-shrink-0 object-cover object-fit"
              />
            </div>
          </div>
          <div className="ml-6 mt-32">
            <img
              tabIndex={0}
              src="https://i.ibb.co/LSxy7fy/Rectangle-9.png"
              className="w-72 h-80 rounded-lg"
              alt="guy with sunglasses"
            />
            <div className="flex items-start mt-6">
              <img
                tabIndex={0}
                src="https://i.ibb.co/X8PKD3q/Rectangle-8.png"
                alt="girl  laughing"
                className="w-48 h-48 rounded-lg"
              />
              <img
                tabIndex={0}
                src="https://i.ibb.co/2Yj51CY/Rectangle-13.png"
                alt="guy with glasses"
                className="w-20 h-20 rounded-lg ml-6 object-cover object-fit"
              />
            </div>
          </div>
          <div className="mt-14 ml-6">
            <div className="lg:flex ">
              <div>
                <img
                  tabIndex={0}
                  src="https://i.ibb.co/bWGVSkP/Rectangle-10.png"
                  alt="group of friends"
                  className="w-96 h-72 rounded-lg object-center object-fit"
                />
              </div>
              <div>
                <div className="flex ml-6">
                  <img
                    tabIndex={0}
                    src="https://i.ibb.co/80jvpSv/Rectangle-16.png"
                    className="w-20 h-20 rounded-lg mt-14"
                    alt="man"
                  />
                  <img
                    tabIndex={0}
                    src="https://i.ibb.co/6PR2Y74/Rectangle-15.png"
                    className="w-20 h-24 rounded-lg ml-6"
                    alt="woman"
                  />
                </div>
                <img
                  tabIndex={0}
                  src="https://i.ibb.co/M5rvjhk/Rectangle-14.png"
                  alt="boy with blonde hair"
                  className="ml-6 mt-6 w-48 h-32 rounded-lg"
                />
              </div>
            </div>
            <div className="mt-6 flex">
              <img
                tabIndex={0}
                className="w-48 h-48 rounded-lg"
                src="https://i.ibb.co/GPpMsbr/Rectangle-12.png"
                alt="young girl with red hair"
              />
              <img
                tabIndex={0}
                className="w-72 h-56 rounded-lg ml-6"
                src="https://i.ibb.co/VBcgkVL/Rectangle-11.png"
                alt="young girl with red hair"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
