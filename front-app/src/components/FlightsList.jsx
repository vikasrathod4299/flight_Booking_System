import React from 'react'
import FlightCard from './FlightCard'

const FlightsList = ({data}) => {
  return (

            <div className='w-1/2'>
                {
                    data?.map((root) => {
                        return(root.flights.map((flight)=>{
                            return (<FlightCard
                                key={flight.id}
                                from={root.fromCity}
                                to={root.toCity}
                                flight={flight}
                                />)
                            }))
                        })
                    }
            </div>
  )
}

export default FlightsList