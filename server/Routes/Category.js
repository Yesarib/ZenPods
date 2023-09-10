const express = require('express');
const { getCategoryNames, getPodcastWithCategoryName, getEpisodeWithCategoryName, addCategory } = require('../Controllers/Category');

const router = express.Router();

router.post('/addCategory', addCategory)
router.get('/getCategoryNames', getCategoryNames);
router.get('/getPodcastWithCategoryName/:name', getPodcastWithCategoryName)
router.get('/getEpisodeWithCategoryName/:name', getEpisodeWithCategoryName)

module.exports = router;