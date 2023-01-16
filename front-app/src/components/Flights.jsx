import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import errorImg from "../Images/502882e21da32ab983d6a6f2e79f62a8.png";

import FlightCard from "./FlightCard";


const SearchFlight = () => {
  const [flights, setFlights] = useState([]);
  const  serachParams = JSON.parse(window.localStorage.getItem('searchParam'))
  
  const query = new URLSearchParams({fromCity:serachParams.fromCity,toCity:serachParams.toCity,date:serachParams.depaDate}).toString();

  useEffect(() => {
    (async () => {
      let data = await axios.get(
        `${process.env.REACT_APP_API_URL}flights/search?${query}`
      );
      setFlights(data.data);
    })();
  }, [query,serachParams]);
  
  return (
    <div>
      <div id="flights" className="container my-32 w-[1000px] bg-white">
        <div>
          {flights.length > 0 ? (
            flights.map((root) => {
              
                return(root.flights.map((flight)=>{
                    return (<FlightCard
                    key={flight.id}
                    from={root.fromCity}
                    to={root.toCity}
                    flight={flight}
                    />)
                }))

            })
          ) : (
            <img
              className="mx-auto pb-10"
              src={errorImg}
              alt="flight not found"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchFlight;
