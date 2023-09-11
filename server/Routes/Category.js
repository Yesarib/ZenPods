const express = require('express');
const { getCategoryNames, getPodcastWithCategoryId, getEpisodeWithCategoryId, addCategory, getCategoryById } = require('../Controllers/Category');

const router = express.Router();

router.post('/addCategory', addCategory)
router.get('/getCategoryById/:id', getCategoryById)
router.get('/getCategoryNames', getCategoryNames);
router.get('/getPodcastWithCategoryId/:id', getPodcastWithCategoryId)
router.get('/getEpisodeWithCategoryId/:id', getEpisodeWithCategoryId)

module.exports = router;