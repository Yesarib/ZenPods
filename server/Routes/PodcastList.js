const express = require('express')
const { createNewPodcastList, getUserPodcastLists, postEpisodeToPodcastList, getPodcastListById, updatePlaylist } = require('../Controllers/PodcastList.js')

const router = express.Router();

router.post('/createNewPodcastList/:id', createNewPodcastList);
router.get('/getUserPodcastList/:id',getUserPodcastLists);
router.get('/getPodcastListById/:id',getPodcastListById);
router.post('/postEpisodeToPodcastList', postEpisodeToPodcastList);
router.put('/updatePodcastList/:id',updatePlaylist);


module.exports = router