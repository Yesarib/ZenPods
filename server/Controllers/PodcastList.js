const UserPlaylist = require('../Models/UserPlaylist.js');
const Episode = require('../Models/Episode.js');
const createError = require('http-errors');


const createNewPodcastList = async(req,res,next) => {
    try {
        const { title, imageUrl } = req.body; 
        const userId = req.params.id;
    
        
        const newPlaylist = new UserPlaylist({
            title: title, 
            imageUrl: imageUrl, 
            createdBy: userId, 
            episodes: [],
        });

        await newPlaylist.save();
        res.status(201).json(newPlaylist);
    } catch (error) {
        next(error);
    }
}

const getUserPodcastLists = async(req,res,next) => {
    try {
        const userId = req.params.id;
        console.log(req.params);
        
        const playlists = await UserPlaylist.find({ createdBy: userId });
    
        res.status(200).json(playlists);
    } catch (error) {
        next(error);
    }
}

const getPodcastListById = async(req,res,next) => {
    try {
        const podcastlistId = req.params.id;
        console.log(req.params);
        const podcastList = await UserPlaylist.findById({ _id: podcastlistId});
        res.status(200).json(podcastList);
    } catch (error) {
        next(error)
    }
}

const postEpisodeToPodcastList = async (req, res, next) => {
    try {
        const { podcastListId, episodeId } = req.body;
    
        if (!podcastListId || !episodeId) {
            throw createError[404]("There is no podcast list or episode");
        }
    
        const podcastList = await UserPlaylist.findById(podcastListId);
        if (!podcastList) {
            throw createError[404]("Podcast list not found");
        }
    
        const episode = await Episode.findById(episodeId);
        if (!episode) {
            throw createError[404]("Episode not found");
        }
    
        podcastList.episodes.push(episodeId);
        await podcastList.save();
    
        res.status(200).json({ message: "Episode added to playlist successfully" });
        } catch (error) {
        next(error);
    }
};


const updatePlaylist = async(req,res,next) => {
    try {
        const playlistId = req.params.id;
        const { title,description, imageUrl } = req.body;

        const playlist = await UserPlaylist.findById(playlistId);

        if (!playlist) throw createError[404]("There is no playlist");

        if (title !== undefined && title !== null && title !== "") {
            playlist.title = title;
        }
        if (description !== undefined && description !== null) {
            playlist.description = description;
        }
        if (imageUrl !== undefined && imageUrl !== null && imageUrl !== "") {
            playlist.imageUrl = imageUrl;
        }

        await playlist.save();

        res.status(200).json(playlist);

    } catch (error) {
        next(error)
    }
}



module.exports = {
    createNewPodcastList,
    getUserPodcastLists,
    getPodcastListById,
    postEpisodeToPodcastList,
    updatePlaylist,
}