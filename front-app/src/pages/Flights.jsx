import axios from "axios";
import React from "react";
import {useSearchParams} from 'react-router-dom'
import { useState } from "react";
import { useEffect } from "react";

import FlightCard from "../components/FlightCard";
import FlightsList from "../components/FlightsList";
import ErrNoFlights from "../components/ErrNoFlights";


const Flights = () => {
  const [searchParams ] = useSearchParams();
  const [flights, setFlights] = useState([]);
  // const serachParams = JSON.parse(window.localStorage.getItem('searchParam'))


  useEffect(() => {
    (async () => {
      let data = await axios.get(`${process.env.REACT_APP_API_URL}flights/search?${searchParams}`);
      setFlights(data.data);
    })();
  }, [searchParams]);

console.log(flights);
  return (

    <div className=""> 
      
      <div id="flights" className={`my-32 bg-white`}>

          {
          flights.data?.length > 0 
          ? 
            searchParams.get('returnDate')==='undefined'
            ?
            <div className="flex justify-center">
              <FlightsList data={flights.data} />
            </div>
            :
            <div className="flex justify-center gap-x-5 px-10">
              <FlightsList data={flights.data} />
              <FlightsList data={flights.returnData} />
            </div>
            : 
            <ErrNoFlights/>
          }

      </div>

    </div>
  );
};

export default Flights;
