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
    category: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

PodcastSchema.index({
    title: 'text',
    description: 'text',
    uploadedBy: 'text',
    category: 'text',
}, {
    name: 'TextIndex',
    weights: {
        title: 3,
        description: 2,
        uploadedBy: 1,
        category: 1,
    },
    collation: {
        locale: 'en', // Locale ayarını gerektiği gibi değiştirin
        strength: 2, // Minimum kelime uzunluğu
    },
});

const Podcast = mongoose.model('Podcast', PodcastSchema)

module.exports = Podcast