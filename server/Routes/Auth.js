const express = require('express');
const { SignIn, SignUp } = require('../Controllers/Auth.js')

const router = express.Router();

router.post('/login', SignIn);
router.post('/register', SignUp);

module.exports = router