const { request } = require('express');
const httpStatus = require('http-status');
const {booking,passenger, seat} = require('../models');


const getBookings = async (req,res)=>{
    try{
        let data = await booking.findAll({})
        if(data){
            res.json(httpStatus)
        }
    }catch(err){
        res.status(err.STATUS_PROP).json(err)
    }
}

const createBooking = async (req,res)=>{
    try{
        const bookingData = await booking.create(req.body.bookingData)
        if(bookingData.dataValues.id){
            req.body.passengers= req.body.passengers.map((passenger)=>{
                return {...passenger, bookingId:bookingData.dataValues.id}
            })
            
            const passengerData = await passenger.bulkCreate(req.body.passengers,{validate:true})
            
            if(passengerData.length>0){
                req.body.seats = req.body.seats.map((seat,index)=>{
                    console.log(passengerData[index].id)
                    return {...seat, bookingId:bookingData.dataValues.id, passengerId:passengerData[index].id}
                })

                const seatData = await seat.bulkCreate(req.body.seats,{validate:true})
                
                if(seatData.length>0){
                    res.json({bookingData, passengerData, seatData})
                }                
            }

        }

    }catch(err){
        console.log(err);
        res.status(400).json(err)
    }
}

module.exports={createBooking}