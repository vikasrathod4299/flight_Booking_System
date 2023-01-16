const httpStatus = require('http-status');
const { Model } = require('sequelize');
const {booking} = require('../models');

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

const bookingFlight = async (req,res)=>{
    try{
        let data = await booking.findAll(req.body.booking)
        if(data.id){
            let passengersData = req.body.passengers.map((item)=>{
                item['bookingId']=data.id
                return item
            })
            let seatData = req.body.passengers.map((item)=>{
                item['bookingId']=data.id
                return item
            })
            passengersResult = await booking.bulkCreate(passengersData)
            seatResult = await booking.bulkCreate()
            res.status(200).json({...booking,passengersResult,seatResult})
        }
    }catch(err){
        res.status(404).json(err.STATUS_PROP)
    }
}


module.exports={bookingFlight}