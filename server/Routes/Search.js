const express = require('express');
const { search } = require('../Controllers/Search');


const router = express.Router();

router.get('/search', search);


module.exports = router;