import React, { useState } from "react";
import SideNav from "./SideNav";
import Nav from "./Nav";
import axios from "axios";
import { base_Url_BookingService } from "../api/bootapi";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export const GenerateReport = () => {
  const [showModal, setShowModal] = React.useState(false);
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  // State Object for user Data
  const [generateReport, setGenerateReport] = useState({
    adminId: `${localStorage.getItem("adminId")}`,
    serviceType: "completed",
    serReqId: `${localStorage.getItem("id")}`,
  });

  //Get API For Backend
  const generateReports = (data) => {
    //  console.log(data);
    axios
      .post(
        `${base_Url_BookingService}/servicereq/report`,
        data,

        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      )
      .then(
        (response) => {
          console.log("Yes data is added");
          console.log(response.data);
          toast.success("Report Added Successfully");
          navigate(`/reports`);
        },
        (error) => {
          console.log(error);
          toast.error("Unable to generate report");
        }
      );
  };

  const handleForm = (e) => {
    //  console.log(generateReport);
    //  console.log(isChecked);

    // console.log("This is working");
    //  setUser(...user, regdDate:)
    generateReports(generateReport);
    e.preventDefault();
    //e.nativeEvent.stopImmediatePropagation();
  };

  return (
    <>
      <Nav />

      <div className="flex">
        {/* <SideNav className="flex-none w-52  h-max" /> */}

        <div className="  flex-1 h-auto">
          <form onSubmit={handleForm}>
            <div className="pr-10  pb-5 overflow-x-hidden overflow-y-hidden grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 ">
              <div className=" ">
                <div className="flex flex-no-wrap items-start">
                  <div className="w-full ">
                    <div className="">
                      <div className="bg-white rounded shadow  py-7">
                        <div className="mt-10 px-7">
                          <p className="text-xl font-semibold leading-tight text-gray-800">
                            Generate Service Report Here
                          </p>
                          <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-7 ">
                            <div>
                              <p className="text-base font-medium leading-none text-gray-800">
                                Request Date
                              </p>

                              <div className="relative top-1 ">
                                <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
                                  <input
                                    className="relative flex items-center justify-between w-full px-5 py-4"
                                
                                    type="date"
                                    id="reportDate"
                                    name="reportDate"
                                    required
                                    onChange={(e) => {
                                      setGenerateReport({
                                        ...generateReport,
                                        reportDate: e.target.value,
                                      });
                                    }}
                                  />
                                </div>
                              </div>
                            </div>

                            <div>
                              <p className="text-base font-medium leading-none text-gray-800">
                                Action Taken
                              </p>
                              <div className="relative top-1">
                                <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
                                  <input
                                    className="relative flex items-center justify-between w-full px-5 py-4"
                                    placeholder="Action taken"
                                    id="actionTaken"
                                    name="actionTaken"
                                    type="text"
                                    required
                                    onChange={(e) => {
                                      setGenerateReport({
                                        ...generateReport,
                                        actionTaken: e.target.value,
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
                                Diagnosis Details
                              </p>
                              <div className="relative top-1">
                                <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
                                  <input
                                    className="relative flex items-center justify-between w-full px-5 py-4"
                                    placeholder="Enter Diagnosis Details"
                                    type="text"
                                    name="diagnosisDetails"
                                    id="diagnosisDetails"
                                    required
                                    onChange={(e) => {
                                      setGenerateReport({
                                        ...generateReport,
                                        diagnosisDetails: e.target.value,
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
                                Repair Details
                              </p>
                              <div className="relative top-1">
                                <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
                                  <input
                                    className="relative flex items-center justify-between w-full px-5 py-4"
                                    placeholder="Repair Details"
                                    id="repairDetails"
                                    name="repairDetails"
                                    type="text"
                                    required
                                    onChange={(e) => {
                                      setGenerateReport({
                                        ...generateReport,
                                        repairDetails: e.target.value,
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
                                Visit Fees
                              </p>
                              <div className="relative top-1">
                                <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
                                  <div className="relative flex items-center justify-between w-full px-5 py-4">
                                    <label for="myCheck">Paid: </label>
                                    <input
                                      type="checkbox"
                                      className="pl-2"
                                      name="isPaid"
                                      id="isPaid"
                                      onChange={(e) => {
                                        setIsChecked(e.target.checked);
                                        setGenerateReport({
                                          ...generateReport,
                                          isPaid: e.target.value,
                                        });
                                      }}
                                    />

                                    <input
                                      className="w-full pl-3 flex items-center justify-between border-none h-auto outline-none"
                                      placeholder="Enter Diagnosis Details"
                                      type="number"
                                      name="diagnosisDetails"
                                      id="diagnosisDetails"
                                      disabled={!isChecked}
                                      defaultValue="0"
                                      required
                                      onChange={(e) => {
                                        setGenerateReport({
                                          ...generateReport,
                                          visitFees: e.target.value,
                                        });
                                      }}
                                    />
                                  </div>

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
                          <button
                            className="bg-white border-indigo-700 rounded hover:bg-gray-50 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-indigo-700 border lg:max-w-[95px]  w-full "
                            onClick={() => setShowModal(true)}
                          >
                            Cancel
                          </button>

                          {showModal ? (
                            <>
                              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                  {/*content*/}
                                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}

                                    {/* <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t"> */}

                                    <button
                                      className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                      onClick={() => setShowModal(false)}
                                    >
                                      <span className="bg-transparent text-gray-400 hover:bg-gray-600 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                        X
                                      </span>
                                    </button>
                                    {/* </div> */}

                                    <div className="p-6 text-center">
                                      <svg
                                        className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        ></path>
                                      </svg>
                                      <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                        Are you sure you want to go back?
                                      </h3>

                                      <NavLink to="/Completeds">
                                        <button
                                          data-modal-toggle="popup-modal"
                                          type="button"
                                          className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                                        >
                                          Yes, I'm sure
                                        </button>
                                      </NavLink>
                                      <button
                                        data-modal-toggle="popup-modal"
                                        type="button"
                                        className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                        onClick={() => setShowModal(false)}
                                      >
                                        No, cancel
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                            </>
                          ) : null}

                          <input
                            value="Submit"
                            type="submit"
                            className="bg-indigo-700 rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full "
                          ></input>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default GenerateReport;
