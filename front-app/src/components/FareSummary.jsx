import React from "react";

const FareSummary = (props) => {
    const adultArr = Array(parseInt(props.adult))
    
   return (
    <div className="bg-white rounded-md h-min shadow-md w-56">
      <div className="p-4">
        <p className="font-bold">FARE SUMMARY</p>
        <code className="font-thin text-xs">
          Adult {props.adult}| Child {props.child}
        </code>
      </div>
      <hr />
      <div className=" flex flex-col gap-y-2 p-4">
        <div className="flex justify-between">
          <p>Base Fare</p>
          <p>
            {props.price
              .toLocaleString("en-IN", { style: "currency", currency: "INR" })
              .slice(0, -3)}
          </p>
        </div>
              <div  className="flex justify-between">
                <p className="text-xs">Adult ({props.adult} x {props.price.toLocaleString("en-IN", { style: "currency", currency: "INR" }).slice(0, -3)})</p>
                
                <p className="text-xs">
                  {(props.price*parseInt(props.adult))
                    .toLocaleString("en-IN", {
                      style: "currency",
                      currency: "INR",
                    })
                    .slice(0, -3)}
                </p>
              </div>
          <hr/>

              <div  className="flex justify-between">
              <p className="text-xs">Child ({props.child} x {props.price.toLocaleString("en-IN", { style: "currency", currency: "INR" }).slice(0, -3)})</p>
                
                <p className="text-xs">
                  {(props.price*parseInt(props.child))
                    .toLocaleString("en-IN", {
                      style: "currency",
                      currency: "INR",
                    })
                    .slice(0, -3)}
                </p>
              </div>
            
      </div>
      <hr />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <p className="font-bold text-blue-500">Grand Totel</p>
          <p className="font-bold text-blue-500 text-xl">
            {(props.price * (parseInt(props.adult) + parseInt(props.child)))
              .toLocaleString("en-IN", { style: "currency", currency: "INR" })
              .slice(0, -3)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FareSummary;
