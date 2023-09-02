const express = require('express');
const { newEpisode, getEpisodes, getPodcastEpisodesById } = require('../Controllers/Episode');


const router = express.Router();

router.post('/:podcastId/newEpisode', newEpisode);
router.get('/getEpisodes', getEpisodes);
router.get('/getPodcastEpisodesById/:podcastId', getPodcastEpisodesById);

module.exports = router