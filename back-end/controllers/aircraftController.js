const {aircrafts} = require("../models")

const getAircraft = async (req,res)=>{
    try{
        let data = await aircrafts.findAll({});
        res.status(200).json(data)
    }catch(err){
        res.status(402).json(err)
    }
}

const addAircraft = async (req,res)=>{
    try{
        let data = await aircrafts.create(req.body);
        res.status(200).json(data)
    }catch(err){
        res.status(402).json(err)
    }
}

const bulkAaircrafts = async (req,res)=>{
    try{
        let data = await aircrafts.bulkCreate(req.body, { validate: true });
        res.status(200).json(data)
    }catch(err){
        res.status(402).json(err)
    }
}

module.exports = {getAircraft, addAircraft, bulkAaircrafts}