import React from "react";
import { useState } from "react";

const SeatBooking = () => {
  const [allSeats, setAllSeat] = useState(new Array(162).fill(0));

  const handleSeat = (e, index) => {
    allSeats[index] = allSeats[index] === 1 ? 0 : 1;
    setAllSeat([...allSeats]);
  };

  return (
    <div className="grid grid-cols-[35px,35px,60px,35px,35px,35px] gap-y-1 ">
      {allSeats.map((seat, index) => {
        return seat === 0 ? (
          // rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
          <div
            className={"bg-white border-2 rounded-md flex w-8 h-8 cursor-pointer justify-center items-center"}
            onClick={(e) => handleSeat(e, index)}
          >
            {index + 1}
          </div>
        ) : (
        //   rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
          <div
            className={"bg-blue-500 text-white border-2 rounded-md flex w-8 h-8 cursor-pointer justify-center items-center"}
            onClick={(e) => handleSeat(e, index)}>
            {index + 1}
          </div>
        );
      })}
    </div>
  );
};

export default SeatBooking;
