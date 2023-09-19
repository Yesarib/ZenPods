const Podcasts = require('../Models/Podcasts.js')
const Episode = require('../Models/Episode.js')
const createError = require('http-errors');
const Category = require('../Models/Category.js');
const User = require('../Models/Users.js');

const search = async(req,res,next) => {
    try {
        const searchTerm = req.query.q;
        const podcastResulsts = await Podcasts.find({ $text:{$search:searchTerm}});
        const episodeResulsts = await Episode.find({ $text:{$search:searchTerm}});
        const colorResults = await Category.find({$text:{$search:searchTerm}})
        const userResults = await User.find({$text:{$search:searchTerm}});

        if (!podcastResulsts && !episodeResulsts) throw createError[404]('No podcast or episode');


        res.status(200).json({
            podcasts: podcastResulsts,
            episodes: episodeResulsts,
            category: colorResults,
            user: userResults
        });
    } catch (error) {
        next(error);
    }
}


module.exports = {
    search,
}