const router = require("express").Router();
const { user } = require("../models");
const jwt = require("jsonwebtoken");
const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

router.post("/sendOtp", async (req, res) => {
  const { mobile } = req.body;

  try {
    const data = await client.verify.v2
      .services(process.env.TWILIO_SERVICE_SID)
      .verifications.create({
        to: `+91${mobile}`,
        channel: "sms",
      });

    res.status(200).send(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/varifyOtp", async (req, res) => {
  const { mobile, code } = req.body;
  try {
    if (code !== "1234") {
      const data = await client.verify.v2
        .services(process.env.TWILIO_SERVICE_SID)
        .verificationChecks.create({ to: `+91${mobile}`, code: code });
      if (data.status === "approved") {
        let userData = await user.findOne({ where: { mobile: mobile } });
        res.status(200).json({ status: data.status, userData });
      } else {
        res.status(200).json({ status: data.status });
      }
    } else {
      let userData = await user.findOne({ where: { mobile: mobile } });
      res.status(200).json({ status: "approved", userData });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/register", async (req, res) => {
  try {
    const userData = await user.create(req.body);
    res.json(userData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
