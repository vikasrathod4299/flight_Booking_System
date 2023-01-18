const {agencies} = require("../models")
const joi = require('joi')

const getAgencies = async (req,res)=>{
    try{
        const agencie = await agencies.findAll({});
        res.status(200).json(agencie)
    }catch(err){
        res.status(500).json(err)
    }
}

const addAgencies = async (req,res)=>{
    try{
        const agencie = await agencies.create(req.body);
        res.status(200).json(agencie)
    }catch(err){
        res.status(500).json(err)
    }
}

const bulkAgencies = async (req,res)=>{
    try{
        const agencie = await agencies.bulkCreate(req.body, { validate: true });
        res.status(200).json(agencie)
    }catch(err){
        res.status(500).json(err)
    }
}

const validations = joi.object().keys({
    agency_name: joi.string(),
    logo: joi.string(),
    discount: joi.number()
})

module.exports = {getAgencies, addAgencies, bulkAgencies}