const mongoose = require('mongoose');


const Schema = mongoose.Schema


const PodcastSchema = new Schema({
    title: {
        type: String,
        default:"My Podcast",
        required: true,
        trim: true
    },
    description: {
        type: String,
        default:"Podcast list description",
        required: true
    },
    imageUrl: {
        default:"https://media.timeout.com/images/105881167/750/422/image.jpg",
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
    category:[{type:String,}],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Podcast = mongoose.model('Podcast', PodcastSchema)

module.exports = Podcast