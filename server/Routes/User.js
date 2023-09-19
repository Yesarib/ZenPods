const express = require('express')
const { getUserById, subscription } = require('../Controllers/User.js')



const router = express.Router();


router.get('/getUserById/:userId', getUserById)
router.post('/subscription/:subscriptionToUserId', subscription)


module.exports = router