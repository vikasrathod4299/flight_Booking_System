const controller  = require('../controllers/ageincesController');
const router = require('express').Router()

router.get('/',controller.getAgencies)
router.post('/',controller.addAgencies)
router.post('/bulk',controller.bulkAgencies)
module.exports = router;