import React from "react";
import FlightCard from "./FlightCard";
import flightLogo from "../Assets/Images/direct-flight.png";

const FlightsList = ({ flights }) => {
  return (
    <div className="w-1/2">
      <div className="flex justify-between my-2">
        <div className="flex px-4">
          <i className="fa-solid fa-plane-departure px-1" />
          <code className="text-sm">{flights?.fromCity?.name} </code>
          <p className="px-3"> ==={">"} </p>
          <i className="fa-solid fa-plane-arrival px-1"></i>
          <code className="text-sm">{flights?.toCity?.name}</code>
        </div>
        <div>
          <code className="text-xs text-slate-400 px-4">
            Showing {flights?.flights.length} flights
          </code>
        </div>
      </div>
      <div>
        {flights?.flights.map((flight) => {
          return (
            <FlightCard
              key={flight.id}
              from={flights.fromCity}
              to={flights.toCity}
              flight={flight}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FlightsList;
