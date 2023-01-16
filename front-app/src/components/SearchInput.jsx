import React, { useState } from "react";

const SearchInput = ({ ph, name, setCityId, cities, excludeCity }) => {
  const [city, setCity] = useState("");
  const [showList, setShowList] = useState(false);
  const [errorMsg, setErrorMsg] = useState("")
  const [border, setBorder] = useState('border-gray-300')
  const filteredCities = cities.filter(
    (item) =>
      item.name.includes(city.toLocaleLowerCase()) && item.id !== excludeCity
  );

  const handleBlur = (e) => {
    if(city.length<=0){
        setBorder('border-red-500');
        setErrorMsg(`*Please must select ${name} from dropdown`)
    }
    setTimeout(() => setShowList(false), 100);
  };
  return (
    <div className="flex flex-col w-1/6">
      <code className="text-gray-600" htmlFor="fromCity">
        {ph}:
      </code>
      <input
        className={`p-3 border-2 outline-blue-500 ${border} rounded-lg`}
        id={name}
        name={name}
        placeholder={`${ph} city (select from dropdown)`}
        value={city}
        autoComplete="off"
        onChange={(e) => {
          setCity(e.target.value);
        }}
        onFocus={(e) => setShowList(true)}
        onBlur={handleBlur}
      />
      <p className="text-red-500 text-xs">{errorMsg}</p>
    {showList && <div className=" h-52 fixed w-1/6 mt-20 overflow-y-auto ">
        {
          filteredCities.map((city) => {
            return (
              <p
                className="bg-white p-4 hover:bg-slate-100 shadow-lg cursor-pointer"
                key={city.id}
                onClick={(e) => {
                  setCity(city.name);
                  setBorder('border-gray-300');
                  setErrorMsg("")
                setCityId(p=>({...p, [name]:city.id}));
                  setShowList(false);
                }}
              >
                {city.name}
              </p>
            );
          })}
      </div>}
    </div>
  );
};

export default SearchInput;
