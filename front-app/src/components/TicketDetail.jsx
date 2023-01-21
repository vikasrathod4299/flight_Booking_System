import React from 'react'

const TicketDetail = () => {
  return (
    <div className=' p-4 border-2 rounded-md w-[700px]'>
        <p>TICKET DETAIL</p>
        <div className='p-3 border border-1 '>
            <div className='flex justify-between gap-x-4 items-center h-32'>

                <div className='flex flex-col w-1/3 items-start'>
                    <img className='h-8' src='https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=14'/>
                    <p className='text-xs text-slate-400'>InidiGo</p>
                    <p className='text-xs text-slate-400'>Economy</p>
                    <p className='text-xs text-slate-400'>6 E-133</p>
                    <p className='text-xs font-bold text-slate-400'>Aircraft:(Turbo)</p>
                </div>

                <div className='w-1/2'>
                    <p className='text-xs'>Wed Feb 01 2023</p>
                    <p className=''>AMD <span className='font-bold'>05:30</span></p>
                    <p className='text-xs text-slate-400'>Sardar Vallabhbhai Patel International Airport,</p>
                    <p className='text-xs text-slate-400'>Ahmedabad, India</p>
                </div>

                <div className='mx-8 w-1/6'>
                    <p>1h 35m</p>
                    <p className='text-xs text-slate-400'>Flight duration</p>
                </div>

                <div className='w-1/2'>
                  <p className='text-xs'>Wed Feb 01 2023</p>
                  <p className=''>AMD 05:30</p>
                  <p className='text-xs text-slate-400'>Sardar Vallabhbhai Patel International Airport,</p>
                  <p className='text-xs text-slate-400'>Ahmedabad, India</p>
                </div>

            </div>
        </div>
      </div>
  )

}

export default TicketDetail