const mongoose = require('mongoose');

const episodeSchema = new mongoose.Schema({
    title: String,
    description: String,
    audioUrl: String,
    imageUrl: { type: String, default: "" },
    publishedAt: { type: Date, default: Date.now },
    publishedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
    category: {type: mongoose.Schema.Types.ObjectId,ref: 'Category',},
    listenCount: { type: Number, default: 0 },
    devices: { type: [String] },
});

const Episode = mongoose.model('Episode', episodeSchema);

module.exports = Episode;
