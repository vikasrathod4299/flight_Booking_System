import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate()
  const bookingData = JSON.parse(localStorage.getItem("bookingData"));

  const bookFlight = () => {
    const passengers = [];
    for (let i = 1; i <= bookingData.adult; i++) {
      passengers.push({
        first_name: bookingData.passengers[`adult${i}firstName`],
        last_name: bookingData.passengers[`adult${i}lastName`],
        gender: bookingData.passengers[`adult${i}title`],
        p_type: "adult",
      });
    }

    for (let i = 1; i <= bookingData.child; i++) {
      passengers.push({
        first_name: bookingData.passengers[`child${i}firstName`],
        last_name: bookingData.passengers[`child${i}lastName`],
        gender: bookingData.passengers[`child${i}title`],
        p_type: "child",
      });
    }

    const seats = [];
    bookingData.bookedSeats.forEach((item) => {
      seats.push({
        seat_number: item,
        seat_class:
          (item <= 50 && "Economy") ||
          (item > 50 && item <= 100 && "Business") ||
          (item > 100 && "Premium"),
        flightId: bookingData.flightId,
      });
    });

    (async () => {
      try {
        const data = await axios.post(`${process.env.REACT_APP_API_URL}bookings`,{bookingData: {total_price: bookingData.total_price,total_passengers: (bookingData.adult + bookingData.child),total_adult:bookingData.adult,total_child:bookingData.child,flightId:bookingData.flightId},seats,passengers});
        console.log(data);
        navigate('/')
      } catch (err) {
        console.log(err);
      }
    })();
  };

  return (
    <div>
      <div className="flex h-screen justify-center items-center">
        <button
          className="bg-green-500 rounded-full px-3 py-2 text-white tracking-widest font-bold hover:bg-green-600 shadow-lg shadow-green-200"
          onClick={bookFlight}
        >
          Payment
        </button>
      </div>
    </div>
  );
};

export default Payment;
