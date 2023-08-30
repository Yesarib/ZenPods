const mongoose = require('mongoose');


const Schema = mongoose.Schema


const PodcastSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
    },
    audioUrl: {
        type: String,
        required: true
    },
    uploadedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Podcast = mongoose.model('Podcast', PodcastSchema)

module.exports = Podcast