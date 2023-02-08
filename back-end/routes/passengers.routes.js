const router = require("express").Router();
const { passenger,seat } = require("../models");


router.get('/:bookingId', async (req,res)=>{
    const {bookingId} = req.params;

    try{
        const data = await passenger.findAll({
            include:[{model:seat}],
            where:{bookingId:bookingId}
        })
        res.json(data)
    }catch(err){
        console.log(err);
        res.status(500).json(err)
    }
})

module.exports=router;
