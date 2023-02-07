const { Op } = require('sequelize')
const {city} = require('../models')

const getCities = async (req,res)=>{
    try{
        const cities = await city.findAll({})
        res.json(cities)
    }catch(err){
        res.status(402).json(err)
    } 
}

const searchCities = async (req,res)=>{
    const {search} = req.query;
    try{
        const cities = await city.findAll({where:{name:{[Op.iLike]:`%${search.toLowerCase()}%`}}})
        res.json(cities)
    }catch(err){
        res.status(402).json(err)
    } 
}

const addCity =  async(req,res)=>{
    try{
        const cities = await city.create(req.body)
        res.json(cities)
    }catch(err){
        res.status(402).json(err)
    }
}

const addBulk = async(req,res)=>{
    try{
        const data = await city.bulkCreate(req.body,{ validate: true }) 
        res.json(data)
    }catch(err){
        res.status(402).json(err)
    }
}


module.exports = {addCity,getCities,addBulk, searchCities}
