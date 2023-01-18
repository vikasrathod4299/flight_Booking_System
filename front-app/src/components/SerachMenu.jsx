import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
const SerachMenu = () => {
  const navigate = useNavigate()
  const [validatFlage, setFlag] = useState(false)
  const [errMsg, setErrMsg] = useState("");
  const [borderClass, setBorderClass] = useState('border-gray-300')
  const [cities, setCities] = useState([]);
  
  const [params, setParams] = useState({
    depaDate: new Date().toJSON().split("T")[0],
    adult: "1",
    child: 0,
  });


  useEffect(() => {
    (async () => {
      const data = await axios.get(`${process.env.REACT_APP_API_URL}city`);
      setCities(data.data);
    })();
  }, []);

  const handleParams = (e) => {
    setParams((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSearch = (e) => {
    if(validatFlage){
      navigate(`/searchFlight?fromCity=${params.fromCity}&toCity=${params.toCity}&date=${params.depaDate}&returnDate=${params.returnDate}`)
      window.localStorage.setItem("searchParam", JSON.stringify(params));
    }else{
      setBorderClass('border-red-500')
      setErrMsg('*Select city from dropdown!')
    }
  };

  return (
    <div className="bg-gradient-to-r sticky -top-56 from-purple-500 to-cyan-500 h-64 shadow-purple-200 shadow-xl ">
      <div className="pt-40 max-w-screen-xl mx-auto px-20  lg:px-0 ">
          <div className=" bg-white flex justify-center items-center h-52 rounded-3xl shadow-xl px-12">
            
            <div className="flex gap-x-4 w-[80vw] mx-auto flex-col sm:flex-row">
              <SearchInput
                cities={cities}
                ph="From"
                name={"fromCity"}
                excludeCity={params.toCity}
                setCityId={setParams}
                setFlag={setFlag}
                borderClass={borderClass}
                setBorderClass={setBorderClass}
                errMsg={errMsg}
                setErrMsg={setErrMsg}
              />
              <SearchInput
                cities={cities}
                ph="To"
                name={"toCity"}
                excludeCity={params.fromCity}
                setCityId={setParams}
                setFlag={setFlag}
                borderClass={borderClass}
                setBorderClass={setBorderClass}
                errMsg={errMsg}
                setErrMsg={setErrMsg}
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
                  min={new Date().toJSON().split("T")[0]  }
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
          <div className="text-center -mt-5 w-full">

              <button
                className="tracking-wide bg-gradient-to-r to-cyan-500 text-white shadow-purple-200 shadow-xl rounded-full h-10 px-16 font-bold hover:tracking-widest"
                onClick={handleSearch}>
                SEARCH
              </button>

          </div>
      </div>
      <Outlet/>
    </div>
  );
};

export default SerachMenu;
