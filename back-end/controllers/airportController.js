const {airport} = require("../models")

const getAirPorts = async (req,res)=>{
    try{
        let airports = await airport.findAll({});
        res.status(200).json(airports)
    }catch(err){
        res.status(402).json(err)
    }
}

const addAirPorts = async (req,res)=>{
    try{
        let airports = await airport.create(req.body);
        res.status(200).json(airports)
    }catch(err){
        res.status(402).json(err)
    }
}

const bulkAirports = async (req,res)=>{
    try{
        let airports = await airport.bulkCreate(req.body, { validate: true });
        res.status(200).json(airports)
    }catch(err){
        res.status(402).json(err)
    }
}

module.exports={getAirPorts, addAirPorts, bulkAirports}