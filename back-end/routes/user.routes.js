const {user} = require('../models')
const { verifyTokenAdminAuth, verifyTokenAuthentication } = require('../middlewares/verifyToken');
const { where } = require('sequelize');
// const controller  = require('../controllers/seatsController');
const router = require('express').Router()

//get user by id (admin)
router.get('user/:id',verifyTokenAdminAuth,async(req,res)=>{
    try{    
        const user = await user.findOne({where:{id:req.params.id}})
        if(user){
            res.json(user)
        }else{
            res.status(404).json('User not found!')
        }
    }catch(err){
        res.status(500).json(err)
    }
})

//update user by id 
router.put('user/:id',verifyTokenAuthentication, async(req,res)=>{
    try{    
        const user = await user.update({...req.body},{where:{id:req.params.id}})
        res.json(user)
    }catch(err){
        res.status(500).json(err)
    }
})


module.exports=router;