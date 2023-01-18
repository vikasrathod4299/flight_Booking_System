import React from 'react'
import errorImg from "../Assets/Images/502882e21da32ab983d6a6f2e79f62a8.png";

const ErrNoFlights = () => {
  return (
    <div className='flex flex-col items-center'>
            <img
                className="mx-auto pb-10"
                src={errorImg}
                alt="flight not found"
              />
            <button className='tracking-wide bg-gradient-to-r to-cyan-500 text-white shadow-purple-200 shadow-xl rounded-full h-10 px-8 font-bold hover:tracking-widest'>
            <i class="fa-solid fa-arrow-left-long"></i> Go Back
            </button>      
    </div>
  )
}

export default ErrNoFlights