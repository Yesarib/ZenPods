import axios from 'axios';
import { BASE_URL } from '../config';


const newPodcast = async(title,description, imageUrl, id, category ) => {
    try {
        return await axios.post(BASE_URL + "/api/newPodcast", {
            title,
            description,
            imageUrl,
            id,
            category,
        }).then((res) => {
            if(res){
                return res.data;
            }
        })
    } catch (error) {
        console.log(error);
    }
}


const getPodcasts = async() => {
    try {
        return await axios.get(BASE_URL + "/api/allPodcast").then((res) => {
            if (res) {
                return res.data
            }
        })
    } catch (error) {
        console.log(error);
    }
}

const getPodcastById = async(id) => {
    try {
        return await axios.get(BASE_URL + "/api/getPodcastById/" + id).then((res) => {
            if(res) {
                return res.data;
            }
        })
    } catch (error) {
        console.log(error);
    }
}

const getUserPodcasts = async(id) => {
    try {
        return await axios.get(BASE_URL + "/api/" + id + "/getUserPodcasts").then((res) => {
            if (res) {
                return res.data
            }
        })
    } catch (error) {
        console.log(error);
    }
}


const podcastService = {
    newPodcast,
    getPodcasts,
    getPodcastById,
    getUserPodcasts
}

export default podcastService;