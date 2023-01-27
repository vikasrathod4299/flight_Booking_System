const {seat} = require('../models')

const getSeatsByFlihgtId = async (req,res)=>{
    const {flightId} = req.params
    try{
        const seatData = await seat.findAll({where:{flightId:flightId}})
        res.json(seatData)
    }catch(err){
        console.log(err);
        res.status(404).json(err)
    }
}

module.exports={getSeatsByFlihgtId}