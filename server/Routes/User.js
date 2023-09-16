const express = require('express')
const { getUserById, updateUser } = require('../Controllers/User.js')

const router = express.Router();

router.get('/getUserById', getUserById)
router.put('/updateUser/:userId', updateUser)


module.exports = router