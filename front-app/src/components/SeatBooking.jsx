import React from "react";
import { useState } from "react";

const SeatBooking = ({setToggle, adult, child}) => {
  const [allSeats, setAllSeat] = useState(new Array(162).fill(0));
  const [bookedSeats, setBookedSeats] = useState(Array((adult+child)).fill(0))
  
  const handleSeat = (e, index) => {

    bookedSeats.splice(0,1)
    bookedSeats.push(index)

    setAllSeat(...allSeats.map((item,index)=>{
      if(bookedSeats.find((seat)=> seat===index)){
        return 1
      }else{
        return 0
      }

    }))

  };

  return (
    <div className="bg-white w-[700px] h-[700px] px-6 py-2 rounded-lg">
      <p>ADDONS (Seat Booking)</p>
      <div className="flex">
          <div className="bg-gradient-to-r from-purple-500  to-cyan-500 overflow-y-scroll h-[650px] w-[450px] rounded-md">
            <img src={"https://goibibo.ibcdn.com/styleguide/images/reassetsformealsseats_dweb/plane_top.png"} alt="seatBooking"/>
            <img src={"https://goibibo.ibcdn.com/styleguide/images/reassetsformealsseats_dweb/plane_bot.png"} alt="seatBooking"/>
            <div className="grid grid-cols-[35px,35px,60px,35px,35px,35px] gap-y-1 ml-[96px] -mt-[1060px] text-xs">
              {allSeats.map((seat, index) => {
                return seat === 0 ? (
                  <div key={index}
                  className={`bg-white shadow-md border-2 ${index<54 && 'border-green-300'} ${index>=54 && index<108 && 'border-blue-300'} ${index>=108 && 'border-purple-300'} rounded-md flex w-8 h-8 cursor-pointer justify-center items-center`}
                  onClick={(e) => handleSeat(e, index)}>
                    {index + 1}
                  </div>
                ) : (
                  <div key={index}
                  className={"bg-blue-500 text-white border-2 rounded-md flex w-8 h-8 cursor-pointer justify-center items-center"}
                  onClick={(e) => handleSeat(e, index)}>
                    {index + 1}
                  </div> 
                );
              })}
            </div>
          </div>

          <div className="flex flex-col justify-end gap-y-3 p-2">
            <div className="flex flex-col gap-y-2 ">
                <div className="flex justify-between items-center">
                  <div className="flex gap-x-2 items-center w-40">
                    <div className="w-4 h-4 border-2 border-green-300"></div>
                    <p className="text-sm text-slate-600">Ecconomy</p>
                  </div>
                  <p className="text-sm text-slate-600">₹100</p>
                </div> 
                <div className="flex justify-between items-center">
                  <div className="flex gap-x-2 items-center w-40">
                    <div className="w-4 h-4 border-2 border-blue-300"></div>
                    <p className="text-sm text-slate-600 ">Premium</p>
                  </div>
                  <p className="text-sm text-slate-600 ">₹1100</p>
                </div> 
                <div className="flex justify-between items-center">
                  <div className="flex gap-x-2 items-center w-40">
                    <div className="w-4 h-4 border-2 border-purple-300"></div>
                    <p className="text-sm text-slate-600">Bussiness</p>
                  </div>
                  <p className="text-sm text-slate-600">₹750</p>
                </div> 
            </div>
            <button className="bg-slate-400 text-white rounded-md shadow-md p-2 px-4 font-bold" onClick={e=>setToggle('details')}><span className="mx-2"><i className="fa-solid fa-arrow-left"></i></span>Go Back</button>
            <button className="bg-cyan-500 text-white rounded-md shadow-md p-2 px-4 font-bold">Procced to Pay</button>
          </div>

      </div>
    </div>
  );
};

export default SeatBooking;
