const jwt = require('jsonwebtoken')

const verfyToken = (req,res,next)=>{
    const token = req.headers['authorization']

    if(token){
      jwt.verify(token,process.env.JWT_SECRET_KEY,(err,user)=>{
        if(err){
            res.status(403).json("Token is not valid!")
        }else{
            req.user=user;
            next()
        }
    })
    }else{
      
    }  
}

const verifyTokenAuthentication = (req,res,next)=>{
    verfyToken(req,res,()=>{

        if(req.user.id==req.params.id || req.user.isAdmin){
            next()
        }
        else{
            res.status(403).json("you ar not authenticated")
        }
    })

    }


const verifyTokenAdminAuth = (req,res,next)=>{
    verfyToken(req,res,()=>{
        if(req.user.isAdmin){
            next()
        }
        else{
            res.status(403).json("You are not allowed to do that")
        }
    })
}
 

module.exports = {verfyToken, verifyTokenAdminAuth, verifyTokenAuthentication};