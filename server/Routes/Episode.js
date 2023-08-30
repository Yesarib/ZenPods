const express = require('express');
const { newEpisode, getEpisodes, getUserPodcastEpisodes } = require('../Controllers/Episode');


const router = express.Router();

router.post('/newEpisode', newEpisode);
router.get('/getEpisodes', getEpisodes);
router.get('/getUserPodcastEpisodes', getUserPodcastEpisodes);

module.exports = router