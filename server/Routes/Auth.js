const express = require('express');
const { SignIn, SignUp } = require('../Controllers/Auth.js');
const { verifyAccessToken } = require('../Helpers/JWT.js');

const router = express.Router();


router.post('/login', verifyAccessToken, SignIn);
router.post('/register', SignUp);

module.exports = router