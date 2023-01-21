import axios from "axios";
import React from "react";
import { useSearchParams } from "react-router-dom";
import { useState,useEffect } from "react";
import FlightsList from "../components/FlightsList";
import ErrNoFlights from "../components/ErrNoFlights";
import loadingGif from '../Assets/Images/Loading_2.gif'
import FiltersCard from "../components/FiltersCard";

const Flights = () => {
  const [searchParams] = useSearchParams();
  const [agencyFilters, setAgencyFilters] = useState(new Set());
  const [flights, setFlights] = useState();
  const [returnFlights, setReturnFlights] = useState();
  const [mainData, setMainData]=useState([])
  const [loder,setLoder] = useState('idle')

  useEffect(() => {
  
    (async () => {
      try{
        setLoder('fetching')
        let res = await axios.get(
          `${process.env.REACT_APP_API_URL}flights/search?${searchParams}`
          );
        if(res.data.data.length>0)
        {
          setFlights(res.data.data[0])
          setLoder('success')
          setMainData(res.data.data[0].flights);
        }else{
          setLoder('success')
          setFlights(undefined)
        }
        if(res.data.returnData.length>0)
        {
          setLoder('success')
          setReturnFlights(res.data.returnData[0]);
        } 
      }catch(err){
        setLoder('error')
        console.log(err)
      }
      })();
  }, [searchParams]);

  const handleFilterChange = (e) => {
    setAgencyFilters((p) => {
      if (e.target.checked) {
        p.add(e.target.value);
      } else {
        p.delete(e.target.value);
      }
      return new Set(p);
    });
  };

  useEffect(() => {
    if(agencyFilters.size>0){
        setFlights(p=> ({...p,flights:mainData.filter(item=>agencyFilters.has(item.aircraft.agency.agency_name))}) )
    }else{
        setFlights(p=>({...p,flights:mainData}))
    }
  }, [agencyFilters]);


  return (
    <div className="">
      <div id="flights" className={`my-32 bg-white`}>
        {
          loder!='fetching'
          ?
            (flights 
            ? 
              (
                searchParams.get("returnDate") === "" 
                ? 
                  (<div className="flex justify-center gap-x-4">
                    <FiltersCard handleChange={handleFilterChange} />
                    <FlightsList flights={flights} />
                    </div>) 
                : 
                  (<div className="flex justify-center gap-x-5 px-10">
                    <FiltersCard handleChange={handleFilterChange} />
                    <FlightsList flights={flights} />
                    <FlightsList flights={returnFlights} />
                  </div>)
              )
            : 
            (<ErrNoFlights/>))
          :
              <div className="flex flex-col items-center justify-center">
                <img className="h-14" src={loadingGif} alt='loder'/>
                <code className="text-xs">Searching flights...</code>
              </div>
        }
      </div>
    </div>
  );
};

export default Flights;
