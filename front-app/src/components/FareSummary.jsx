import React from "react";

const FareSummary = (props) => {
  return (
    <div className="bg-white rounded-md h-min shadow-md w-56">
        <div className="p-4">
            <p className="font-bold">FARE SUMMARY</p>
            <code className="font-thin text-xs">Adult {props.adult}| Child {props.child}</code>
        </div>
        <hr />
        <div className="p-4">
          <div className="flex justify-between">
            <p>Base Fare</p>
            <p>$5000</p>
          </div>
          <div className="flex justify-between">
            <p>Base Fare</p>
            <p>$5000</p>
          </div>  
        </div>
        <hr/>
        <div className="p-4">
          <div className="flex justify-between items-center">
            <p className="font-bold text-blue-500">Grand Totel</p>
            <p className="font-bold text-blue-500 text-xl">$5000</p>
          </div>
        </div>
    </div>
  );
};

export default FareSummary;
