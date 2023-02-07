import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useAuth } from '../Hooks/useAuth' 
const DisplayBookings = () => {
    const {user} = useAuth() 
    const [bookings, setBookings] = useState([]);
    
    useEffect(()=>{
        if(user)(async()=>{
            const headers = {'Authorization':user.accessToken}
            const bookings = await axios.get(`${process.env.REACT_APP_API_URL}bookings/${user.id}`,{headers})
            setBookings(bookings.data)

        })()
    },[user])

  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1514189214581-f5118026e4c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] h-screen bg-cover bg-center ">
        <div className='flex justify-center items-center h-full '>
            <div className='flex flex-col py-10 gap-y-9 bg-slate-400 shadow-lg bg-clip-padding bg-opacity-30 backdrop-blur-lg border border-gray-100 rounded-3xl w-3/4 p-3'>
                <div className=''>
                    <p className='text-white text-lg font-bold drop-shadow-lg'>Your Booknigs.</p> 
                </div>
                
                <div>   
                    <div className="relative overflow-x-auto  sm:rounded-md">
                        <table className="w-full text-sm text-left text-white">
                            <thead className="text-xs text-white uppercase bg-white bg-opacity-40">
                                <tr className='drop-shadow-md'>
                                    <th scope="col" className="px-3 py-3 ">
                                        PNR 
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        From
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        To
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Date
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Tack-off time
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Fare Price
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Total Price
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Passengers Details
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Cancel Bookng
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                               
                               {
                                bookings.map((item,index)=>{
                                   return (
                                   <tr key={index} className={`bg-white border-b ${index%2===0?'bg-opacity-20':'bg-opacity-40'} drop-shadow-md`}>
                                    <th scope="row" className="px-3 py-4 font-medium  whitespace-nowrap ">
                                        {item.id}
                                    </th>
                                    <td className="px-6 py-4">
                                        {item.flight.mainroot.fromCity.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.flight.mainroot.toCity.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.flight.date}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.flight.depTime}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.flight.arrTime}   
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.total_price.toLocaleString("en-IN", {style: "currency",currency: "INR",}).slice(0, -3)}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button href="#" className="bg-white  bg-opacity-20 px-2 py-1 rounded-full text-white font-bold hover:underline">View passengers</button>
                                    </td>
                                    <td className="px-6 py-2">
                                        <button href="#" className="bg-red-600  bg-opacity-20 px-2 py-1 rounded-full text-white font-bold hover:underline">Cancel</button>
                                    </td>
                                </tr>)

                                })
                               }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DisplayBookings