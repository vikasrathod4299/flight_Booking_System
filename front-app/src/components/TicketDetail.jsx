import React from 'react'

const TicketDetail = ({flight, bookingClass, from, to}) => {
    console.log(flight);
  return (
    <div style={{"backdropFilter": "blur(15px)"}} className=' p-4 bg-white shadow-lg bg-clip-padding bg-opacity-40 border border-gray-200 rounded-md w-[700px]'>
        <p>TICKET DETAIL</p>
        <div className='p-3 border border-1 bg-white'>
            <div className='flex justify-between gap-x-4 items-center h-32'>

                <div className='flex flex-col w-1/3 items-start'>
                    <img className='h-8' src={flight.aircraft.agency.logo}/>
                    <p className='text-xs text-slate-400'>{flight.aircraft.agency.agency_name}</p>
                    <p className='text-xs text-slate-400'>{bookingClass}</p>
                    <p className='text-xs text-slate-400'>{flight.aircraft.aircraft_number}</p>
                    <p className='text-xs font-bold text-slate-400'>Aircraft:({flight.aircraft.aircraft_name})</p>
                </div>

                <div className='w-1/2'>
                    <p className='text-xs'>Wed Feb 01 2023</p>
                    <p className=''>{from.name} <span className='font-bold'>{flight.depTime}</span></p>
                    <p className='text-xs text-slate-400'>{from.airports[0]?.airport_name}</p>
                    <p className='text-xs text-slate-400'>{from.name}, {from.country}</p>
                </div>

                <div className='flex items-center gap-x-1 w-1/2'>
                    <i className="fa-solid fa-location-dot text-slate-500 mt-2"></i>
                    <p className='text-slate-500'>.....</p>
                    <div className='text-center'>
                      <p>1h 35m</p>
                      <p className='text-xs text-slate-400'>Flight duration</p>
                    </div>
                    <p className='text-slate-500'>...</p>
                    <i className="fa-solid fa-plane text-slate-500 mt-2"></i>
                </div>

                <div className='w-1/2'>
                  <p className='text-xs'>Wed Feb 01 2023</p>
                  <p className=''>{to.name} <span className='font-bold'>{flight.arrTime}</span></p>
                  <p className='text-xs text-slate-400'>{to.airports[0]?.airport_name}</p>
                  <p className='text-xs text-slate-400'>{to.name}, {from.country}</p>  
                </div>

            </div>
        </div>
      </div>
  )

}

export default TicketDetail