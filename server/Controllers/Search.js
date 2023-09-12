const Podcasts = require('../Models/Podcasts.js')
const Episode = require('../Models/Episode.js')
const createError = require('http-errors');

const search = async(req,res,next) => {
    try {
        const searchTerm = req.query.q;
        const podcastResulsts = await Podcasts.find({ $text:{$search:searchTerm}});
        const episodeResulsts = await Episode.find({ $text:{$search:searchTerm}});

        if (!podcastResulsts && !episodeResulsts) throw createError[404]('No podcast or episode');


        res.status(200).json({
            podcasts: podcastResulsts,
            episodes: episodeResulsts,
        });
    } catch (error) {
        next(error);
    }
}


module.exports = {
    search,
}