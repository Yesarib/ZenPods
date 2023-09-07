const mongoose = require('mongoose');

const userPlaylistSchema = new mongoose.Schema({
    title: {type:String, default:"My Podcast List"},
    description :{type:String, default:""},
    imageUrl: {type:String, default:"https://media.timeout.com/images/105881167/750/422/image.jpg",},
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    episodes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Episode' }],
});


const UserPlaylist = mongoose.model('UserPlaylist', userPlaylistSchema);

module.exports = UserPlaylist;