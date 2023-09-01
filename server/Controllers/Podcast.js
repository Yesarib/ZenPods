const Podcast = require('../Models/Podcasts.js');
const User = require('../Models/Users');
const createError = require('http-errors')

const newPodcast = async(req,res,next) => {
    try {
        const { id, title, description, imageUrl, category } = req.body

        const user = await User.findById(id);
        if (!user) throw createError[404]('User not found')

        const newPost = new Podcast({
            title: title,
            description: description,
            imageUrl : imageUrl,
            uploadedBy: id,
            category: category,
        })

        const savedPodcast = await newPost.save();

        res.status(201).json({ message: "Podcast created successfully", podcast: savedPodcast });

    } catch (error) {
        next(error)
    }
}

const allPodcasts = async(req,res,next) => {
    try {
        const podcasts = await Podcast.find();
        res.status(200).json(podcasts);
    } catch (error) {
        next(error)
    }
}

const getPodcastById = async(req,res,next) => {
    try {
        const podcastId = req.params.podcastId;
        const podcast = await Podcast.findOne({ _id: podcastId});
        res.status(200).json(podcast);
    } catch (error) {
        next(error)
    }
}

const getUserPodcasts = async(req,res,next) => {
    try {
        const { id } = req.params;
        const podcasts = await Podcast.findById({ _id: id })
        res.status(200).json(podcasts); 
    } catch (error) {
        next(error)
    }
}


module.exports = {
    newPodcast,
    allPodcasts,
    getPodcastById,
    getUserPodcasts,
}