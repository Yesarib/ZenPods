const mongoose = require('mongoose');

const episodeSchema = new mongoose.Schema({
    title: String,
    description: String,
    audioUrl: String,
    imageUrl:{type:String, default:""},
    publishedAt: { type: Date, default: Date.now },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
    listenCount: { type: Number, default: 0 },
    devices: { type: [String] },
});

const Episode = mongoose.model('Episode', episodeSchema);

module.exports = Episode;
