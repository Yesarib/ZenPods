const express = require('express');
const { newEpisode, getEpisodes, getUserPodcastEpisodes } = require('../Controllers/Episode');


const router = express.Router();

router.post('/:podcastId/newEpisode', newEpisode);
router.get('/getEpisodes', getEpisodes);
router.get('/:podcastId/getUserPodcastEpisodes', getUserPodcastEpisodes);

module.exports = router