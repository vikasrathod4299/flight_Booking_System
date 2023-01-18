import React from "react";

import mainLogo from "../Assets/Images/online-flight-ticket-booking-2246488-1911562.png";

const Home = () => {
  
  return (
    <div className="">

      <div className="flex mt-20 justify-center gap-x-32 ">
        <div className=" flex flex-col gap-y-4 p-8">
          <p className="text-5xl font-extrabold italic text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 tracking-widest">
            FLIGHTS
          </p>
          <p className="text-2xl text-slate-800 font-extrabold tracking-widest">
            Booking.
          </p>
          <div className="w-96">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
            <p>Ipsum quis libero, maxime unde quos voluptatem? Vero,</p>
            <p>eaque iure a magnam? Impedit Totam eius itaque beatae repellat, suscipit optio!</p>
            <p>Ipsum quis libero, maxime unde quos voluptatem? Vero, iustomaiores.</p>
            <p>Totam eius itaque beatae repellat eaque iure a magnam? Impedit,suscipit optio! iusto maiores.</p>
          </div>
        </div>
        <div className="opacity-80">
          <img src={mainLogo} alt="main page"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
