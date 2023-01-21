import React, { useState } from "react";

const SearchInput = (props) => {
  const [city, setCity] = useState("");
  const [showList, setShowList] = useState(false);
  const filteredCities = props.cities.filter(
    (item) =>
      item.name.includes(city.toLocaleLowerCase()) &&
      item.id !== props.excludeCity
  );

  const handleBlur = (e) => {
    setTimeout(() => setShowList(false), 100);
  };

  return (
    <div className="flex flex-col w-1/6">
      <code className="text-gray-600" htmlFor="fromCity">
        {props.ph}:
      </code>
      <input
        className={`p-3 border-2 outline-blue-500 ${props.borderClass} rounded-lg`}
        id={props.name}
        name={props.name}
        placeholder={`${props.ph} city (select from dropdown)`}
        value={city}
        autoComplete="off"
        onChange={(e) => {
          setCity(e.target.value);
        }}
        onFocus={(e) => setShowList(true)}
        onBlur={handleBlur}
      />
      <p className="text-red-500 text-xs">{props.errMsg}</p>

      {showList && (
        <div className=" h-52 fixed w-1/6 mt-20 overflow-y-auto ">
          {filteredCities.map((city) => {
            return (
              <p
                className="bg-white p-4 hover:bg-slate-100 shadow-lg cursor-pointer"
                key={city.id}
                onClick={() => {
                  setCity(city.name);
                  props.setCityId((p) => ({ ...p, [props.name]: city.id }));
                  props.setFlag(true);
                  props.setBorderClass("border-gray-300");
                  props.setErrMsg("");
                  setShowList(false);
                }}
              >
                {city.name}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
