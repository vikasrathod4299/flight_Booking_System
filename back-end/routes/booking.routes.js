const controller  = require('../controllers/bookingController');
const router = require('express').Router()

router.post('/',controller.createBooking)

module.exports = router;
