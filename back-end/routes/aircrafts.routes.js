const controller  = require('../controllers/aircraftController');
const router = require('express').Router()

router.get('/',controller.getAircraft)
router.post('/',controller.addAircraft)
router.post('/bulk',controller.bulkAaircrafts)
module.exports = router;