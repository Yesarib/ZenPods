const Review = require('../Models/Review.js');
const Episode = require('../Models/Episode.js')
const createErrors = require('http-errors');

const newReview = async (req, res, next) => {
    try {
        const { episodeId } = req.params;
        const { userId, rating, comment } = req.body;

        const episode = await Episode.findById(episodeId);
        if (!episode) throw createErrors[404]('Episode not found');

        const newReview = new Review({
            userId: userId,
            episodeId: episodeId,
            rating: rating,
            comment: comment
        });

        episode.reviews.push(newReview);
        await episode.save();

        const savedReview = await newReview.save();

        res.status(201).json({ message: 'Review added successfully', review: savedReview });

    } catch (error) {
        next(error);
    }
}

const getEpisodeReview = async (req, res, next) => {
    try {
        const { episodeId } = req.params;
        const episode = await Episode.findById(episodeId);
        if (!episode) throw createErrors[404]('Episode not found');

        res.status(200).json(episode.reviews);
    } catch (error) {
        next(error)
    }
}

module.exports = {
    newReview,
    getEpisodeReview,
}