const router = require('express').Router()
const {user} = require('../models')

router.post('/',(req,res)=>{
    const {email} = req.body
    try{
        const userData = user.findOne({where:{email:email}})
        if(userData){
            res.json(userData)
        }else{
            res.status(404).json('User Not Found!')
        }
    }catch(err){
        console.log(err);
        res.status(402).json(err)
    }
})

module.exports = router;