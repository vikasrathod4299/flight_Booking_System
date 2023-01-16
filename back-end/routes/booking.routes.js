const controller  = require('../controllers/bookingController');
const router = require('express').Router()

router.post('/',controller.bookingFlight)

module.exports = router;
