import React, { useState, useEffect, useRef } from "react";
import Nav from "./Nav";
import Addusers from "./svgAssets/Addusers";
import MyComponent from "./svgAssets/MyComponent";
import { NavLink, useNavigate } from "react-router-dom";
import { base_Url_Authorization } from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";
const Profile = () => {
  const [showModall, setShowModall] = React.useState(false);
  const [updateProfile, setUpdateProfile] = useState({});

  const isLoaded = useRef(true);

  useEffect(() => {
    if (isLoaded.current) {
      isLoaded.current = false;
      getProfileDetailsFromServer();
    }
  }, []);

  //GET APIs From Server
  const getProfileDetailsFromServer = () => {
    axios
      .get(
        `${base_Url_Authorization}/getData/${localStorage.getItem("adminId")}`
      )
      .then(
        (response) => {
          console.log(response.data);
          setUpdateProfile(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
  };
  const setLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("adminId");
    toast.success("Logout successful!");
    navigate("/signin");
  };

  //formHandler fUNCTION
  const handleForm = (e) => {
    console.log(e);
    //  toast.error("Details Verified");
    updateDataToServer(updateProfile);
    e.preventDefault();
  };

  const navigate = useNavigate();

  //code for server for updation
  const updateDataToServer = (data) => {
    axios.put(`${base_Url_Authorization}/update`, data).then(
      (response) => {
        toast.success("Updated Successfully");
        navigate(`/user`);
      },
      (error) => {
        console.log("error");
        toast.error("Something Went Wrong");
      }
    );
  };

  return (
    <>
      <Nav />

      <div className="flex">

        <div className="h-screen flex-1 w-64 w-auto">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="border-t border-gray-200">
              <dl>
                <div className="w-auto  overflow-hidden">
                  <div className="px-4 md:px-10 py-1 md:py-4 bg-gray-100 rounded-tl-lg rounded-tr-lg">
                    <div className="sm:flex items-center justify-between">
                      <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                        My Profile
                      </p>
                    </div>
                  </div>
                </div>
              </dl>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3">
            {/* <NavLink to="/adduser"> */}

            <div
              onClick={() => setShowModall(true)}
              className=" overflow-hidden shadow-lg mt-3 hover:bg-indigo-600 rounded-2xl"
            >
              <div className="px-6 py-4">
                <div className=" mt-3 flex flex-row justify-center pt-10">
                  <Addusers />
                </div>
                <div className="font-bold text-center text-xl mb-2 pt-4">
                  Update Profile
                </div>
              </div>
            </div>

            {showModall ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                          Update Your Profile
                        </h3>
                        <button
                          className=" p-1 ml-auto bg-transparent border-0  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModall(false)}
                        >
                          <span className=" text-black hover:bg-red-500 rounded-2xl w-6 text-xl block outline-none focus:outline-none">
                            x
                          </span>
                        </button>
                      </div>
                      {/*body*/}

                      <div className="relative p-6 w-auto flex-auto">
                        <form onSubmit={handleForm}>
                          <div className="flex flex-no-wrap items-start">
                            <div className="w-full ">
                              <div className="bg-white rounded shadow  py-7">
                                <div>
                                  <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-7 ">
                                    <div>
                                      <p className="text-base font-medium leading-none text-gray-800">
                                        Update Name
                                      </p>
                                      <div className="relative top-1">
                                        <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
                                          <input
                                            className="relative flex items-center justify-between w-full px-5 py-4"
                                            placeholder="Update Name"
                                            type="text"
                                            name="name"
                                            id="name"
                                            value={updateProfile.name}
                                            required
                                            onChange={(e) => {
                                              setUpdateProfile({
                                                ...updateProfile,
                                                name: e.target.value,
                                              });
                                            }}
                                          />

                                          <div
                                            className="absolute right-0 z-20 hidden w-full px-1 py-2 bg-white border-t border-gray-200 rounded shadow top-12"
                                            id="drop-down-div-one"
                                          ></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      <p className="text-base font-medium leading-none text-gray-800">
                                        User name
                                      </p>
                                      <div className="relative top-1">
                                        <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
                                          <input
                                            className="relative flex items-center justify-between w-full px-5 py-4"
                                            placeholder="User name"
                                            type="text"
                                            name="name"
                                            id="name"
                                            value={updateProfile.username}
                                          required
                                            onChange={(e) => {
                                              setUpdateProfile({
                                                ...updateProfile,
                                                username: e.target.value,
                                              });
                                            }}
                                          />

                                          <div
                                            className="absolute right-0 z-20 hidden w-full px-1 py-2 bg-white border-t border-gray-200 rounded shadow top-12"
                                            id="drop-down-div-one"
                                          ></div>
                                        </div>
                                      </div>
                                    </div>

                                    <div>
                                      <p className="text-base font-medium leading-none text-gray-800">
                                        Password
                                      </p>
                                      <div className="relative top-1">
                                        <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
                                          <input
                                            className="relative flex items-center justify-between w-full px-5 py-4"
                                            placeholder="Update Name"
                                            type="password"
                                            name="name"
                                            id="name"
                                            required
                                            value={updateProfile.password}
                                            onChange={(e) => {
                                              setUpdateProfile({
                                                ...updateProfile,
                                                password: e.target.value,
                                              });
                                            }}
                                          />

                                          <div
                                            className="absolute right-0 z-20 hidden w-full px-1 py-2 bg-white border-t border-gray-200 rounded shadow top-12"
                                            id="drop-down-div-one"
                                          ></div>
                                        </div>
                                      </div>
                                    </div>

                                    <div>
                                      <p className="text-base font-medium leading-none text-gray-800">
                                        Mobile
                                      </p>
                                      <div className="relative top-1">
                                        <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
                                          <input
                                            className="relative flex items-center justify-between w-full px-5 py-4"
                                            placeholder="Mobile"
                                            id="mobile"
                                            name="mobile"
                                            type="tel"
                                           required
                                            value={updateProfile.mobile}
                                            onChange={(e) => {
                                              setUpdateProfile({
                                                ...updateProfile,
                                                mobile: e.target.value,
                                              });
                                            }}
                                          />

                                          <div
                                            className="absolute right-0 z-20 hidden w-full px-1 py-2 bg-white border-t border-gray-200 rounded shadow top-12"
                                            id="drop-down-div-one"
                                          ></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="flex mt-8 flex-col flex-wrap items-center justify-center w-full px-7 lg:flex-row lg:justify-end md:justify-end gap-x-4 gap-y-4">
                                  <input
                                    type="button"
                                    value="Cancel"
                                    className="bg-white border-indigo-700 rounded hover:bg-gray-50 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-indigo-700 border lg:max-w-[95px]  w-full "
                                    onClick={() => setShowModall(false)}
                                  ></input>

                                  <input
                                    value="Submit"
                                    type="submit"
                                    className="bg-indigo-700 rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full "
                                  ></input>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : null}

            <NavLink to="/">
              <div
                onClick={() => setLogout()}
                className=" overflow-hidden shadow-lg mt-3 hover:bg-indigo-600 rounded-2xl"
              >
                <div className="px-6 py-4">
                  <div className=" mt-3 flex flex-row justify-center pt-10">
                    <MyComponent />
                  </div>
                  <div className="font-bold text-center text-xl mb-2 pt-4">
                    Log Out
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

export default Profile;
