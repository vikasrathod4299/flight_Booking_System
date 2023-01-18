import React from "react";

const FareSummary = (props) => {
  return (
    <div className="bg-white p-8 rounded-md shadow-md">
      <div className="">
        <div>
            <p className="font-bold">FARE SUMMARY</p>
            <code className="font-thin text-xs">Adult {props.adult}| Child {props.child}</code>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default FareSummary;
