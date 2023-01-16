import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import SearchInput from "./SearchInput";

const SerachMenu = () => {
  const [cities, setCities] = useState([]);
  const [params, setParams] = useState({ depaDate:new Date().toJSON().split('T')[0],adult: "1", child: 0 });
    
  useEffect(() => {
    (async () => {
      const data = await axios.get(process.env.REACT_APP_API_URL + "city");
      setCities(data.data);
    })();
  }, []);

  const handleParams = (e)=>{
    setParams(p=>({...p, [e.target.name]:e.target.value}))
  }

  const setLocalStore = (e)=>{
    window.localStorage.setItem('searchParam',JSON.stringify(params))
  }

  return (
    <div className="sticky -top-14">
      <div className="bg-white flex justify-center items-center h-52 rounded-3xl shadow-xl px-12">
        <div className="flex gap-x-4 w-[80vw] mx-auto flex-col sm:flex-row">
          <SearchInput
            cities={cities}
            ph="From"
            name={"fromCity"}
            excludeCity={params.toCity}
            setCityId={setParams}
          />
          <SearchInput
            cities={cities}
            ph="To"
            name={"toCity"}
            excludeCity={params.fromCity}
            setCityId={setParams}
          />
          <div className="flex flex-col w-1/6">
            <code className="text-gray-600" htmlFor="departure">
              Departure:
            </code>
            <input
              className="p-3 border-2 outline-blue-500 border-gray-300 rounded-lg"
              type={"date"}
              id="departure"
              name="depaDate"
              value={params.depaDate}
              placeholder="Departure date"
              min={params.depaDate}
              onChange={handleParams}
            />
          </div>

          <div className="flex flex-col w-1/6">
            <code className="text-gray-600" htmlFor="return">
              Return:
            </code>
            <input
              className="p-3  border-2 outline-blue-500 border-gray-300 rounded-lg"
              type={"date"}
              id="return"
              name="returnDate"
              placeholder="Return date"
              min={params.depaDate}
              onChange={handleParams}
            />
          </div>

          <div className="flex flex-col w-20 gap-x-6">
            <code className="text-gray-600" htmlFor="return">
              Travellers:
            </code>
            <div className="flex gap-x-1">
              <input
                type="number"
                min={1}
                value={params.adult}
                onChange={handleParams}
                name="adult"
                className="px-2 py-6 border-2 text-xs outline-blue-500 border-gray-300 rounded-lg w-20 h-12"
                placeholder="Adult"
              />
              <input
                type="number"
                min={0}
                onChange={handleParams}
                name="child"
                className="px-2 py-6 border-2 text-xs outline-blue-500 border-gray-300 rounded-lg w-20 h-12"
                placeholder="child"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center  -mt-5 w-full">
        <Link to={`searchFlight/${params.fromCity}-to-${params.toCity}-on-${params.depaDate}`}>
          <button className="tracking-wide bg-gradient-to-r to-cyan-500 text-white shadow-purple-200 shadow-xl rounded-full h-10 px-16 font-bold hover:tracking-widest" onClick={setLocalStore}>
            SEARCH
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SerachMenu;
