const express = require('express');
const { newEpisode, getEpisodes, getPodcastEpisodesById, getEpisodesById } = require('../Controllers/Episode');


const router = express.Router();

router.post('/:podcastId/newEpisode', newEpisode);
router.get('/getEpisodes', getEpisodes);
router.get('/getEpisodesById', getEpisodesById);
router.get('/getPodcastEpisodesById/:podcastId', getPodcastEpisodesById);

module.exports = router