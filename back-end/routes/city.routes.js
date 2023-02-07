const router = require('express').Router()
const contoller = require('../controllers/cityContoller')

router.get('/',contoller.getCities)
router.get('/searchCity',contoller.searchCities)
router.post('/',contoller.addCity)
router.post('/bulk',contoller.addBulk)

module.exports = router;