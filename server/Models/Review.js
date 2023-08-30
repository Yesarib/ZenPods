const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    episodeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Episode' },
    rating: Number,
    comment: String
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
