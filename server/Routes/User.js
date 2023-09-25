const express = require('express')
const { getUserById, subscription, getSubscription, addPlaylist, removePlaylist, getSubscriber } = require('../Controllers/User.js')



const router = express.Router();


router.get('/getUserById/:userId', getUserById)
router.post('/subscription/:subscriptionToUserId', subscription)
router.get('/getSubscription/:userId', getSubscription);
router.get('/getSubcribers/:userId', getSubscriber);
router.post('/addPlaylist/:playlistId', addPlaylist)
router.post('/removePlaylist/:playlistId', removePlaylist)


module.exports = router