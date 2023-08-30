const mongoose = require('mongoose');

const episodeSchema = new mongoose.Schema({
    title: String,
    description: String,
    audioUrl: String,
    publishedAt: { type: Date, default: Date.now },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }]
});

const Episode = mongoose.model('Episode', episodeSchema);

module.exports = Episode;
