const router = require("express").Router();
const { user } = require("../models");
const jwt = require("jsonwebtoken");
const {verfyToken, verifyTokenAdminAuth} = require('../middlewares/verifyToken')

const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const env = process.env.NODE_ENV 
router.post("/sendOtp", async (req, res) => {
  const { mobile } = req.body;
  try {
    if(env==='production'){
      console.log('helo');
      const data = await client.verify.v2
      .services(process.env.TWILIO_SERVICE_SID)
      .verifications.create({
        to: `+91${mobile}`,
        channel: "sms",
      });
      res.status(200).send(data);
    }else{
      res.status(200).json('1234')
    }

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/varifyOtp", async (req, res) => {
  const { mobile, code } = req.body;
  try {
    if (env==='production') {
      const data = await client.verify.v2
        .services(process.env.TWILIO_SERVICE_SID)
        .verificationChecks.create({ to: `+91${mobile}`, code: code });
      if (data.status === "approved") {
        const userData = await user.findOne({ where: { mobile: mobile } });
        if(userData){
          const accessToken = await jwt.sign({id:userData.id, role:userData.role},process.env.JWT_SECRET_KEY)
          res.status(200).json({ status: data.status, userData , accessToken});
        }else{
          res.status(200).json({ status: data.status, userData });          
        }
      } else {
        res.status(200).json({ status: data.status });
      }
    } else {
      let userData = await user.findOne({ where: { mobile: mobile } });
      if(userData){
        const accessToken = await jwt.sign({id:userData.id, role:userData.role},process.env.JWT_SECRET_KEY)
        res.status(200).json({ status: 'approved', userData , accessToken});
      }else{
        res.status(200).json({ status: 'approved', userData });          
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/register", async (req, res) => {
  try {
    const userData = await user.create(req.body);
    const accessToken = await jwt.sign({id:userData.id},process.env.JWT_SECRET_KEY);
    res.json({userData, accessToken});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
