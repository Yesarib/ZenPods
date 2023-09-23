const { uploadFileToS3 } = require('../Helpers/AWS.js');
const Episode = require('../Models/Episode.js');
const Podcast = require('../Models/Podcasts.js')
const createError = require('http-errors')

const newEpisode = async (req, res, next) => {
    try {
        const { podcastId } = req.params;
        const { title, description, imageUrl, publishedBy } = req.body;
        const audioFile = req.file

        if (!audioFile) throw createError[400]('Audio File is required')

        const podcast = await Podcast.findById(podcastId);
        if (!podcast) throw createError[404]('Podcast not found');

        const cleanFileName = audioFile.originalname.replace(/[^a-zA-Z0-9-_]/g, '') + '.mp3';
        const audioBuffer = Buffer.from(audioFile.buffer);
        const s3AudioUrl = await uploadFileToS3('podcastbucket23', 'audio/'+ cleanFileName, audioBuffer)

        const newEpisode = new Episode({
            title: title,
            description: description,
            imageUrl:imageUrl,
            audioUrl: s3AudioUrl,
            publishedBy:publishedBy
        });

        podcast.episodes.push(newEpisode);
        await podcast.save();

        const savedEpisode = await newEpisode.save();

        res.status(201).json({ message: 'Episode added successfully', episode: savedEpisode });

    } catch (error) {
        next(error)
    }
}


const getEpisodes = async(req,res,next) => {
    try {
        const episodes = await Episode.find();
        res.status(200).json(episodes);

    } catch (error) {
        next(error)
    }
}

const getEpisodesById = async (req, res, next) => {
    try {
        const ids = req.query.id
        console.log("IDLER => " + ids);
        const episodesData = [];
        for (const id of ids) {
            const episode = await Episode.findById(id);
            if (!episode) {
            throw createError[404]("Episode not found");
            }
            episodesData.push(episode);
        }
    
        res.status(200).json(episodesData);
        } catch (error) {
        next(error);
    }
};

const getPodcastEpisodesById = async(req,res,next) => {
    try {
        const { podcastId } = req.params;
        const podcast = await Podcast.findById(podcastId);
        if (!podcast) throw createError[404]('Podcast not found');     
        
        const episodeIds = podcast.episodes;

        // episodeIds içindeki tüm bölümleri çekmek için MongoDB'de $in operatörünü kullanabilirsiniz.
        const episodes = await Episode.find({ _id: { $in: episodeIds } });

        res.status(200).json(episodes);
    } catch (error) {
        next(error)
    }
}

module.exports = {
    newEpisode,
    getEpisodes,
    getEpisodesById,
    getPodcastEpisodesById,
}