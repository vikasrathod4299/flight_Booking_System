import { getDistance } from "geolib";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const FlightCard = ({ from, to, flight }) => {
  const [hClass, sethClass] = useState("h-[0px] opacity-0");
  const [distance, setDistane] = useState(0);

    useEffect(() => {
      setDistane(
        parseInt(
          getDistance(
            { longitude: from.longitude, latitude: from.latitude },
            { longitude: to.longitude, latitude: to.latitude }
          ) / 1000
        )
      );
    }, [from,to])

    
  return (
    
    <div className="">
      <div className="flex justify-around items-center bg-slate-50 shadow-blue-100 rounded-md shadow-lg  z-50 h-32 ">
        <div className="flex gap-x-3">
          <div className="flex items-center">
            <img
              className="h-8  shadow-red-200 shadow-lg"
              src={flight.aircraft.agency.logo}
              alt="ageincy logo"
            />
          </div>
          <div>
            <p>{flight.aircraft.agency.agency_name}</p>
            <p className="font-thin text-sm">
              {flight.aircraft.aircraft_number}
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center">
            <p className="text-xs text-slate-400">
              {from.name}, {from.country}
            </p>
            <p className="font-bold text-xl">{flight.depTime}</p>
            <p className="text-xs text-slate-400">Chhtrapati Shivaji Airport</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center">
            <p className="text-xs text-slate-400">
              {to.name}, {to.country}
            </p>
            <p className="font-bold text-xl">{flight.arrTime}</p>
            <p className="text-xs text-slate-400">Chhtrapati Shivaji Airport</p>
          </div>
        </div>
          <div>
            <p className="text-xs text-slate-400">Price</p>
            <p className="text-2xl font-extralight">
              {(distance * flight.aircraft.agency.price)
                .toLocaleString("en-IN", { style: "currency", currency: "INR" })
                .slice(0, -3)}
            </p>
          </div>
        <div>
          <button
            onClick={(e) =>
              sethClass(
                hClass === "h-[150px] opacity-100 mb-3"
                  ? "h-[0px] opacity-0"
                  : "h-[150px] opacity-100 mb-3"
              )
            }
            className="tracking-wide bg-gradient-to-l from-purple-400 to-cyan-500 text-white shadow-purple-200 shadow-lg rounded-md h-8 px-3 font-light hover:scale-105 transition-all duration-200 hover:shadow-xl hover:shadow-purple-200"
          >
            View prices <i className="fa fa-caret-down" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className={`${hClass} flex flex-col justify-between transition-all duration-300 bg-slate-50 rounded-md shadow-blue-100 shadow-lg p-3`}>
        <div className={`${hClass} flex justify-between font-thin bg-slate-200`}>
          <p>Classes</p>
          <p>Check in</p>
          <p>Cabin</p>
          <p>Book Now</p>
        </div>
        <div className={`${hClass} flex justify-between items-center `}>

          <div className="flex flex-col gap-y-2">
            <div>
              <p className="text-sm font-bold">Economy Class: </p>
            </div>
            <div>
              <p className="text-sm font-bold">Bussiness Class: </p>
            </div>
            <div>
              <p className="text-sm font-bold">Primeum Class: </p>
            </div>
          </div>

          <div className="flex flex-col gap-y-2">
            <div>
              <p className="text-sm font-light">
                {flight.aircraft.check_in_wight} Kgs
              </p>
            </div>
            <div>
              <p className="text-sm font-light">
                {flight.aircraft.check_in_wight} Kgs
              </p>
            </div>
            <div>
              <p className="text-sm font-light">
                {flight.aircraft.check_in_wight} Kgs
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-y-2">
            <div>
              <p className="text-sm font-light">
                {flight.aircraft.cabin_wight} Kgs
              </p>
            </div>
            <div>
              <p className="text-sm font-light">
                {flight.aircraft.cabin_wight} Kgs
              </p>
            </div>
            <div>
              <p className="text-sm font-light">
                {flight.aircraft.cabin_wight} Kgs
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-y-2 ">
              <div>
                  <Link to={`/bookingDetails/${flight.id}`} state={{flight,from,to,bookingClass:'Economy',price:distance * flight.aircraft.agency.price}}>
                    <p className="text-sm text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 font-bold border-2 border-blue-400 px-2 rounded-md hover:bg-clip-padding hover:text-white hover:font-light cursor-pointer  hover:border-white hover:scale-110 hover:shadow-md hover:shadow-blue-300 transition duration-200">
                      {(distance * flight.aircraft.agency.price)
                        .toLocaleString("en-IN", {
                          style: "currency",
                          currency: "INR",
                        })
                        .slice(0, -3)}
                    </p>
                  </Link>
              </div>
              <div>
                <Link to={`/bookingDetails/${flight.id}`} state={{flight,from,to,bookingClass:'Bussiness',price:distance * (flight.aircraft.agency.price+2)}}>
                  <p className="text-sm text-center text-transparent  bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 font-bold border-2 border-blue-400 px-2 rounded-md hover:bg-clip-padding hover:text-white hover:font-light cursor-pointer  hover:border-white hover:scale-110 hover:shadow-md hover:shadow-blue-300 transition duration-200">
                    {(distance * (flight.aircraft.agency.price + 2))
                      .toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                      })
                      .slice(0, -3)}
                  </p>
                </Link>
              </div>
              <div>
              <Link to={`/bookingDetails/${flight.id}`} state={{flight,from,to,bookingClass:'Primeum',price:distance * (flight.aircraft.agency.price+3)}}>
                  <p className="text-sm text-center text-transparent  bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 font-bold border-2 border-blue-400 px-2 rounded-md hover:bg-clip-padding hover:text-white hover:font-light cursor-pointer  hover:border-white hover:scale-110 hover:shadow-md hover:shadow-blue-300 transition duration-200">
                    {(distance * (flight.aircraft.agency.price + 3))
                      .toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                      })
                      .slice(0, -3)}
                  </p>
                </Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
