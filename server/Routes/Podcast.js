const express = require('express')
const { newPodcast, allPodcasts, getUserPodcasts, getPodcastById } = require('../Controllers/Podcast.js');

const router = express.Router();

router.post('/newPodcast', newPodcast);
router.get('/allPodcast', allPodcasts);
router.get("/getPodcastById/:podcastId",getPodcastById)
router.get('/getUserPodcasts', getUserPodcasts);

module.exports = router