import axios from "axios";
import React from "react";
import {useSearchParams} from 'react-router-dom'
import { useState } from "react";
import { useEffect } from "react";
import errorImg from "../Assets/Images/502882e21da32ab983d6a6f2e79f62a8.png";
import FlightCard from "../components/FlightCard";


const SearchFlight = () => {
  const [searchParams ] = useSearchParams();
  const [flights, setFlights] = useState([]);
  const serachParams = JSON.parse(window.localStorage.getItem('searchParam'))


  useEffect(() => {
    (async () => {
      let data = await axios.get(`${process.env.REACT_APP_API_URL}flights/search?${searchParams}`);
      setFlights(data.data);
    })();
  }, [searchParams]);


  return (

    <div className=""> 
      
      <div id="flights" className="container my-32 w-[1000px] bg-white">

          {flights.data?.length > 0 ? (
            flights.data.map((root) => {
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
  );
};

export default SearchFlight;
