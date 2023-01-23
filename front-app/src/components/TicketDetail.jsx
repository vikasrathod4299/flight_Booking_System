import React from 'react'

const TicketDetail = ({flight, bookingClass}) => {

  return (
    <div className=' p-4 border-2 bg-white  rounded-md w-[700px]'>
        <p>TICKET DETAIL</p>
        <div className='p-3 border border-1 '>
            <div className='flex justify-between gap-x-4 items-center h-32'>

                <div className='flex flex-col w-1/3 items-start'>
                    <img className='h-8' src='https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=14'/>
                    <p className='text-xs text-slate-400'>{flight.aircraft.agency.agency_name}</p>
                    <p className='text-xs text-slate-400'>{bookingClass}</p>
                    <p className='text-xs text-slate-400'>{flight.aircraft.aircraft_number}</p>
                    <p className='text-xs font-bold text-slate-400'>Aircraft:({flight.aircraft.aircraft_name})</p>
                </div>

                <div className='w-1/2'>
                    <p className='text-xs'>Wed Feb 01 2023</p>
                    <p className=''>AMD <span className='font-bold'>{flight.depTime}</span></p>
                    <p className='text-xs text-slate-400'>Sardar Vallabhbhai Patel International Airport,</p>
                    <p className='text-xs text-slate-400'>Ahmedabad, India</p>
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
                  <p className=''>AMD <span className='font-bold'>{flight.arrTime}</span></p>
                  <p className='text-xs text-slate-400'>Sardar Vallabhbhai Patel International Airport,</p>
                  <p className='text-xs text-slate-400'>Ahmedabad, India</p>  
                </div>

            </div>
        </div>
      </div>
  )

}

export default TicketDetail