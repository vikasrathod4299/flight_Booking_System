const controller  = require('../controllers/seatsController');
const router = require('express').Router()

//get Seats by flight id.
router.get('/:flightId',controller.getSeatsByFlihgtId)

module.exports = router;