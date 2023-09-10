import axios from "axios";
import { BASE_URL } from "../config";

const newPodcastList = async(id, title, imageUrl) => {
    try {
        return await axios.post(BASE_URL + "/api/createNewPodcastList/" + id, {
            title,
            imageUrl,
        }).then((res) => {
            if (res) {
                return res.data
            }
        })
    } catch (error) {
        console.log(error);
    }
}

const getPodcastlists = async() => {
    try {
        return await axios.get(BASE_URL + '/api/getPodcastlists').then((res) => {
            if(res) {
                return res.data
            }
        })
    } catch (error) {
        console.log(error);
    }
}

const getUserPodcastList = async(id) => {
    try {
        return await axios.get(BASE_URL + "/api/getUserPodcastList/" + id).then((res) => {
            if (res) {
                return res.data
            }
        })
    } catch (error) {
        console.log(error);
    }
}

const getPodcastListById = async(id) => {
    try {
        return await axios.get(BASE_URL + "/api/getPodcastListById/" + id).then((res) => {
            if (res){
                return res.data
            }
        })
    } catch (error) {
        console.log(error);
    }
}

const addEpisodeToPodcastList = async(playlistId, episodeId) => {
    try {
        return await axios.post(BASE_URL + "/api/postEpisodeToPodcastList", {
            podcastListId:playlistId,
            episodeId:episodeId
        }).then((res) => {
            if (res) {
                return res.data
            }
        })
    } catch (error) {
        console.log(error);
    }
}

const updatePodcastlist = async(playlistId, title, description, imageUrl, podcastlist) => {
    try {
        const updatedImageUrl = imageUrl || podcastlist.imageUrl;

        return await axios.put(BASE_URL + "/api/updatePodcastList/" + playlistId, {
            title:title,
            description:description,
            imageUrl:updatedImageUrl,
        }).then((res) => {
            if (res) {
                return res.data
            }
        })
    } catch (error) {
        console.log(error);
    }
}

const podcastListService = {
    newPodcastList,
    getUserPodcastList,
    getPodcastListById,
    getPodcastlists,
    addEpisodeToPodcastList,
    updatePodcastlist,
}

export default podcastListService;