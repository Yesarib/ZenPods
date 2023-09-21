const express = require('express')
const { getUserById, subscription, getSubscription, addPlaylist, removePlaylist } = require('../Controllers/User.js')



const router = express.Router();


router.get('/getUserById/:userId', getUserById)
router.post('/subscription/:subscriptionToUserId', subscription)
router.get('/getSubscription/:userId', getSubscription);
router.post('/addPlaylist/:playlistId', addPlaylist)
router.post('/removePlaylist/:playlistId', removePlaylist)


module.exports = router