const express = require('express')
const { createNewPodcastList, getUserPodcastLists, postEpisodeToPodcastList, getPodcastListById, updatePlaylist, getPodcastlists } = require('../Controllers/PodcastList.js')

const router = express.Router();

router.post('/createNewPodcastList/:id', createNewPodcastList);
router.get('/getUserPodcastList/:id',getUserPodcastLists);
router.get('/getPodcastlists',getPodcastlists);
router.get('/getPodcastListById/:id',getPodcastListById);
router.post('/postEpisodeToPodcastList', postEpisodeToPodcastList);


module.exports = router