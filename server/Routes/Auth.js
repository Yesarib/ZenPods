const express = require('express');
const { SignIn, SignUp, getUser } = require('../Controllers/Auth.js');
const { verifyAccessToken } = require('../Helpers/JWT.js');

const router = express.Router();

router.get('/getUserById', verifyAccessToken, getUser)
router.post('/login', SignIn);
router.post('/register', SignUp);

module.exports = router