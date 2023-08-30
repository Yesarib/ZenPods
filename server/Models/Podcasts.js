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
    uploadedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    episodes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Episode'
    }],
    category:[String],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Podcast = mongoose.model('Podcast', PodcastSchema)

module.exports = Podcast