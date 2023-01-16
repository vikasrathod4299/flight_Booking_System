const controller  = require('../controllers/airportController');
const router = require('express').Router()

router.get('/',controller.getAirPorts)
router.post('/',controller.addAirPorts)
router.post('/bulk',controller.bulkAirports)
module.exports = router;