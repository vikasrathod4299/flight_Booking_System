const controller  = require('../controllers/bookingController');
const router = require('express').Router()
const  {verifyTokenAuthentication} = require('../middlewares/verifyToken')

router.post('/:id',verifyTokenAuthentication,controller.createBooking)
router.get('/:id',verifyTokenAuthentication,controller.getBookingsbyId)

module.exports = router;
