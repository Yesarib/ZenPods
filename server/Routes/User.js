const express = require('express')
const { getUserById } = require('../Controllers/User.js')



const router = express.Router();


router.get('/getUserById', getUserById)


module.exports = router