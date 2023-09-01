const express = require('express')
const { newPodcast, allPodcasts, getUserPodcasts } = require('../Controllers/Podcast.js');

const router = express.Router();

router.post('/newPodcast', newPodcast);
router.get('/allPodcast', allPodcasts);
router.get('/:id/getUserPodcasts', getUserPodcasts);

module.exports = router