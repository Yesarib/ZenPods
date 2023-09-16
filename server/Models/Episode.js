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

episodeSchema.index(
    {
        title: 'text',
        description: 'text',
        publishedBy: 'text',
        category: 'text',
    },
    {
        name: 'TextIndex',
        weights: {
            title: 3,
            description: 2,
            publishedBy: 1,
            category: 1,
        },
        default_language: 'turkish',
        min: 1, // Minimum kelime uzunluğu
    }
);

const Episode = mongoose.model('Episode', episodeSchema);

module.exports = Episode;
