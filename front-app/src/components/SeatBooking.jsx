import axios from "axios";
import React from "react";
import { useEffect } from "react";
import loadingGif from '../Assets/Images/Loading_2.gif'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SeatBooking = ({ setToggle, adult, child, passengers, price, flight}) => {
  const [allSeats, setAllSeat] = useState(new Array(150).fill(0));
  const [validation, setValidation] = useState({borderClass:'',errMsg:''});
  const [bookedSeats, setBookedSeats] = useState([]);
  const [loader, setLoader] = useState('idle');
  const [disableSeats, setDisableSeats] = useState([]);
  const navigate = useNavigate();

  
  useEffect(()=>{
    (async()=>{
      try{
        setLoader('fetching')
        const data = await axios.get(`${process.env.REACT_APP_API_URL}seats/${flight.id}`)
        setDisableSeats([...data.data])
        setLoader('success')
      }catch(err){
        console.log(err);
      }
    })()
  },[flight.id])
  
  
  const handleSeat = (e, index) => {
    if (!bookedSeats.includes(index)) {
      if (bookedSeats.length < adult + child) {
        bookedSeats.push(index);
      } else {
        bookedSeats.splice(0, 1);
        bookedSeats.push(index);
      }
    } else {
      bookedSeats.splice(bookedSeats.indexOf(index), 1);
    }
    
    setBookedSeats([...bookedSeats])

    setAllSeat([
      ...allSeats.map((seat, index) => {
        if (bookedSeats.includes(index+1)) {
          return 1;
        } else {
          return 0;
        }
      }),
    ]);

    setValidation({borderClass:'',errMsg:''})

  };

  const handlePaytoProcced = () => {
    if (bookedSeats.length !== adult + child) {
      setValidation({borderClass:'border-2 border-red-400',errMsg:'*Please select all seats.'})
    }else{
      window.localStorage.setItem('bookingData', JSON.stringify({passengers, adult, child, total_price:(price * (parseInt(adult) + parseInt(child))),flightId:flight.id,bookedSeats}))
      navigate(`/payment`)
    }
  };


  return (
    <div style={{"backdropFilter": "blur(15px)"}} className="bg-white shadow-lg bg-clip-padding bg-opacity-25 border border-gray-200 w-[700px] h-[700px] px-6 py-2 rounded-lg">
      
      <p>ADDONS (Seat Booking)</p>

      <div className="flex ">
        {loader==='success'
        ?
            <div className={`overflow-y-scroll h-[650px] w-[450px] rounded-md`}>

              <img src={"https://goibibo.ibcdn.com/styleguide/images/reassetsformealsseats_dweb/plane_top.png"} alt="seatBooking"/>
              <img src={"https://goibibo.ibcdn.com/styleguide/images/reassetsformealsseats_dweb/plane_bot.png"} alt="seatBooking"/>

              <div className="grid grid-cols-[35px,35px,60px,35px,35px,35px] gap-y-1 ml-[96px] -mt-[1025px] text-xs">
              
                {allSeats?.map((seat, index) => {
                  return disableSeats.find(seat=>seat.seat_number===index+1) && 
                    (<div
                      key={index}
                      className={`bg-gray-300 text-white font-extrabold border-2 rounded-md flex w-8 h-8 justify-center items-center`}>
                        X
                    </div>) ||
                  seat === 0 && (<div
                      key={index}
                      className={`bg-white shadow-md border-2 
                      ${index + 1 <= 54 && "border-green-300"}
                      ${index + 1 > 54 && index + 1 < 109 && "border-blue-300"}
                      ${index + 1 > 108 && "border-purple-300"} rounded-md flex w-8 h-8 cursor-pointer justify-center items-center`}
                      onClick={(e) => handleSeat(e, index+1)}>
                      {index + 1}
                    </div>) ||
                    seat === 1 && 
                    (<div
                      key={index}
                      className={`${index + 1 <= 54 && "bg-green-400"} 
                      ${index + 1 > 54 && index + 1 < 109 && "bg-blue-400"} 
                      ${index + 1 > 108 && "bg-purple-400"} text-white border-2 rounded-md flex w-8 h-8 cursor-pointer justify-center items-center`}
                      onClick={(e) => handleSeat(e, index+1)}>
                      {index + 1}
                    </div>)
                    
                })
                }

              </div>

            </div>
          : 
          <div className="bg-white rounded-lg flex flex-col items-center justify-center h-[650px] w-[450px]">
              <img className="h-14" src={loadingGif} alt='loder'/>
              <code className="text-xs">Fetching Seats...</code>
          </div>
        }
            <div className={`flex flex-col justify-between gap-y-3 p-2`}>
                <div>
                  <div className={`flex flex-col gap-y-2 text-md ${validation.borderClass} p-1 rounded`}>
                      <div className="flex justify-between text-xs">
                        <p>Passengers</p>
                        <p>Seat No.</p>
                        <p>Price</p>
                      </div>
                      <hr/>
                      {Array(adult).fill(null).map((value, index) => {
                        return (
                          <div className="flex justify-between" key={index}>
                                <p className="italic">Adult-{index + 1}</p>

                                <code className={` font-thin ${bookedSeats[index] <= 54 && "text-green-500"} 
                                  ${bookedSeats[index] > 54 && bookedSeats[index] < 109 &&"text-blue-500"}
                                  ${bookedSeats[index] > 108 && "text-purple-500"}`}>
                                  
                                  {bookedSeats[index] || "--"}

                                </code>

                                {bookedSeats[index] 
                                ? (<p className="text-sm font-bold text-slate-500">
                                    {bookedSeats[index] <= 54 && "₹100"}
                                    {bookedSeats[index] > 54 && bookedSeats[index] < 109 &&"₹1100"}
                                    {bookedSeats[index] > 108 && "₹750"}
                                  </p>) 
                                : ("--")
                                }
                            </div>);
                        })}

                      {Array(child).fill(null).map((value, index) => {
                          return (
                            <div className="flex justify-between" key={index}>
                                
                                <p className="italic">Child-{index + 1}</p>
                                
                                <code className={` font-thin ${bookedSeats[adult + index] <= 54 && "text-green-500"}
                                  ${bookedSeats[adult + index] > 54 && bookedSeats[adult + index] < 109 && "text-blue-500"}
                                  ${bookedSeats[adult + index] > 108 && "text-purple-500"}`}>
                                  
                                  {bookedSeats[adult + index ] || "--"}
                                
                                </code>

                                {bookedSeats[index + adult]
                                ? (<p className="text-sm font-bold text-slate-500">
                                    {bookedSeats[index + adult] <= 54 && "₹100"}
                                    {bookedSeats[index + adult] > 54 && bookedSeats[index + adult] < 109 &&"₹1100"}
                                    {bookedSeats[index + adult] > 108 && "₹750"}
                                  </p>) 
                                : ("--")
                                }
                                
                            </div>);
                        })}
                  </div>
                  <code className="text-xs text-red-500">{validation.errMsg}</code>
                </div>
                  
                <div className="flex flex-col gap-y-2 ">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-x-2 items-center w-40">
                      <div className="w-4 h-4 border-2 border-green-500"></div>
                      <p className="text-sm text-black">Ecconomy</p>
                    </div>
                    <p className="text-sm text-black">₹100</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-x-2 items-center w-40">
                      <div className="w-4 h-4 border-2 border-blue-300"></div>
                      <p className="text-sm text-black ">Premium</p>
                    </div>
                    <p className="text-sm text-black ">₹1100</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-x-2 items-center w-40">
                      <div className="w-4 h-4 border-2 border-purple-300"></div>
                      <p className="text-sm text-black">Bussiness</p>
                    </div>
                    <p className="text-sm text-black">₹750</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-x-2 items-center w-40">
                      <div className="w-4 h-4 border-2 border-gray-300 bg-gray-300 text-xs text-white flex items-center justify-center">x</div>
                      <p className="text-sm text-black">Booked</p>
                    </div>
                    <p className="text-sm text-black">--</p>
                  </div>
                  <div className="flex gap-y-2 flex-col">
                    <button
                      className="bg-slate-400 text-white rounded-md shadow-md p-2 px-4 font-bold"
                      onClick={() => setToggle("details")}
                    >
                      <span className="mx-2">
                        <i className="fa-solid fa-arrow-left"></i>
                      </span>
                      Go Back
                    </button>
                    <button className="bg-cyan-500 text-white rounded-md shadow-md p-2 px-4 font-bold"
                      onClick={handlePaytoProcced}>
                      Procced to Pay
                    </button>
                  </div>
                </div>

            </div>
      </div>
    </div>
  );
};

export default SeatBooking;
