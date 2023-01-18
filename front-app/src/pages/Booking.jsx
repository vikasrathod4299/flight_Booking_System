import React from "react";
import { useLocation } from "react-router-dom";
import FareSummary from "../components/FareSummary";
import SeatBooking from "../components/SeatBooking";

const Booking = () => {
  const location = useLocation();
  // const { flight, from, to } = location.state;
  const searchParams = JSON.parse(window.localStorage.getItem("searchParam"));

  return (
    <div className="container flex justify-center gap-x-4">
      <div className="bg-slate-100 rounded-md shadow-lg px-8 py-4 w-2/4">
        <code className="text-black">Passengers Details</code>
        
        <form className="flex flex-col gap-y-4 ">
            
          <div className="accordion w-full" id="accordionExampleadult">
            {Array(parseInt(searchParams.adult))
              .fill(null)
              .map((value, index) => {
                return (
                  <div className="accordion-item bg-white border border-gray-200">
                    <h2
                      className="accordion-header mb-0"
                      id={`heading${index}`}
                    >
                      <button
                        className="
                                      accordion-button
                                      relative
                                      flex
                                      items-center
                                      w-full
                                      py-4
                                      px-5
                                      text-base text-gray-800 text-left
                                      bg-white
                                      border-0
                                      rounded-none
                                      transition
                                      focus:outline-none
                                    "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index}`}
                        aria-expanded="true"
                        aria-controls={`collapse${index}`}
                      >
                        Adult {index+1}
                      </button>
                    </h2>
                    <div
                      id={`collapse${index}`}
                      className="accordion-collapse collapse "
                      aria-labelledby={`#heading${index}`}
                      data-bs-parent="#accordionExampleadult"
                    >
                      <div className="flex justify-around accordion-body py-4 px-5">
                        
                      <code>Name</code>
                        <div className="flex gap-x-2">

                          <select>
                            <option disabled selected>Title</option>
                            <option value={1}>Mr</option>
                            <option value={0}>Ms</option>
                          </select>
                        </div>
                        <div className="flex gap-x-4">
                            <input className="outline-blue-400 border-2 rounded-md w-52" type="text" placeholder="First Name"/>
                            <input className="outline-blue-400 border-2 rounded-md w-52" type="text" placeholder="Last Name"/>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="accordion w-full" id="accordionExamplechild">
            {Array(parseInt(searchParams.child))
              .fill(null)
              .map((value, index) => {
                return (
                  <div className="accordion-item bg-white border border-gray-200">
                    <h2
                      className="accordion-header mb-0"
                      id={`heading${index}child`}
                    >
                      <button
                        className="
                                      accordion-button
                                      relative
                                      flex
                                      items-center
                                      w-full
                                      py-4
                                      px-5
                                      text-base text-gray-800 text-left
                                      bg-white
                                      border-0
                                      rounded-none
                                      transition
                                      focus:outline-none
                                    "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index}child`}
                        aria-expanded="true"
                        aria-controls={`collapse${index}child`}
                      >
                        Child {index+1}
                      </button>
                    </h2>
                    <div
                      id={`collapse${index}child`}
                      className="accordion-collapse collapse"
                      aria-labelledby={`#heading${index}child`}
                      data-bs-parent="#accordionExamplechild"
                    >
                      <div className="flex justify-around accordion-body py-4 px-5">
                        
                      <code>Name</code>
                        <div className="flex gap-x-2">

                          <select>
                            <option disabled selected>Title</option>
                            <option value={1}>Mr</option>
                            <option value={0}>Ms</option>
                          </select>
                        </div>
                        <div className="flex gap-x-4">
                            <input className="outline-blue-400 border-2 rounded-md w-52" type="text" placeholder="First Name"/>
                            <input className="outline-blue-400 border-2 rounded-md w-52" type="text" placeholder="Last Name"/>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col">
              <code className="text-sm text-slate-600">Phone Number:</code>
              <input className="p-2 rounded-md" placeholder="Phone number"/>
            </div>
            <div className="flex flex-col">
              <code className="text-sm text-slate-600">Email:</code>
              <input type={'email'} className="p-2 rounded-md" placeholder="Enter Email"/>
              <code className="text-xs font-extralight text-slate-400 py-1">*Your ticket will be sent to this email</code>
            </div>
          </div>
      
          <div className="flex justify-end">
              <button className="bg-cyan-500 text-white rounded-md shadow-md p-2 px-4 font-bold">Proceed</button>
          </div>
        </form>
      </div>  

        <FareSummary adult={searchParams.adult} child={searchParams.child}/>

      {/* <div className="">
        <SeatBooking/>
      </div>
       */}
    </div>
  );
};

export default Booking;
