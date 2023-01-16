const router = require('express').Router()
const contoller = require('../controllers/cityContoller')

router.get('/',contoller.getCities)
router.post('/',contoller.addCity)
router.post('/bulk',contoller.addBulk)

module.exports = router;