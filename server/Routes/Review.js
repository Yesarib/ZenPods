const express = require('express');
const { newReview, getEpisodeReview } = require('../Controllers/Review');


const router = express.Router();

router.post('/newReview', newReview);
router.get('/getEpisodeReview', getEpisodeReview);

module.exports = router