const controller  = require('../controllers/flightsController');
const router = require('express').Router()

router.get('/',controller.getFlight)
router.get('/search',controller.getFlightbyCIty)
router.post('/',controller.addFlight)
router.post('/bulk',controller.addBulkFlight)

module.exports = router;