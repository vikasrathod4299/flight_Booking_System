const {mainroot} = require('../models')

const getRoots = async (req,res)=>{
    try{
        let roots = await mainroot.findAll({})
        res.json(roots)
    }catch(err){
        res.status(402).json(err)
    } 
}

const addRoots =  async(req,res)=>{
    try{
        let roots = await mainroot.create(req.body)
        res.json(roots)
    }catch(err){
        res.status(402).json(err)
    }
}

const addBulkRoots = async(req,res)=>{
    try{
        let data = await mainroot.bulkCreate(req.body,{ validate: true }) 
        res.json(data)
    }catch(err){
        res.status(402).json(err)
    }
}


module.exports = {getRoots,addRoots, addBulkRoots}
