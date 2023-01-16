const controller  = require('../controllers/mainRootController');
const router = require('express').Router()

router.get('/',controller.getRoots)
router.post('/',controller.addRoots)
router.post('/bulk',controller.addBulkRoots)
module.exports = router;