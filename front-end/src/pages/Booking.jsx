import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import FareSummary from "../components/FareSummary";
import SeatBooking from "../components/SeatBooking";
import TicketDetail from "../components/TicketDetail";
import { useState } from "react";
import PassengersDetails from "../components/PassengersDetails";
import { useAuth } from "../Hooks/useAuth";

const Booking = () => {
  const { user } = useAuth();
  const location = useLocation();
  const [passengers, setPassengers] = useState({
    phone: user?.mobile,
    email: user?.email,
  });
  const [seatPrice, setSeatPrice] = useState(0);
  const [toggle, setToggle] = useState("details");
  const searchParams = JSON.parse(window.localStorage.getItem("searchParam"));
  if (!location.state) return <Navigate to="/" />;
  const { flight, from, to, bookingClass, price } = location.state;

  return (  
    <div className="bg-[url('https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80')]  bg-cover bg-center opacity-80">
      <div className="container flex justify-center items-center h-screen gap-x-4">
        <div className="flex gap-x-2">
          <div className="flex">
            <div className="flex flex-col justify-center gap-y-2 items-center">
              <TicketDetail
                from={from}
                to={to}
                flight={flight}
                bookingClass={bookingClass}
              />
              {toggle === "details" ? (
                <PassengersDetails
                  searchParams={searchParams}
                  setPassengers={setPassengers}
                  passengers={passengers}
                  setToggle={setToggle}
                />
              ) : (
                <SeatBooking
                  price={price}
                  flight={flight}
                  setToggle={setToggle}
                  adult={parseInt(searchParams.adult)}
                  child={parseInt(searchParams.child)}
                  passengers={passengers}
                  setSeatPrice={setSeatPrice}
                />
              )}
            </div>
          </div>
          <FareSummary
            adult={searchParams.adult}
            child={searchParams.child}
            price={price}
            seatPrice={seatPrice}
          />
        </div>
      </div>
    </div>
  );
};

export default Booking;
