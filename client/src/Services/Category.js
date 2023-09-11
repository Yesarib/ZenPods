import axios from "axios";
import { BASE_URL } from "../config";

const getCategories = async() => {
    try {
        return await axios.get(BASE_URL + "/api/getCategoryNames").then((res) => {
            if (res) {
                return res.data
            }
        })
    } catch (error) {
        console.log(error);
    }
}

const getCategoryById = async(id) => {
    try {
        return await axios.get(BASE_URL + "/api/getCategoryById/" + id).then((res) => {
            if(res) {
                return res.data
            }
        })
    } catch (error) {
        console.log(error);
    }
}

const getPodcastWithCategoryId = async(id) => {
    try {
        return await axios.get(BASE_URL + "/api/getPodcastWithCategoryId/" + id).then((res) => {
            if (res) {
                return res.data
            }
        })
    } catch (error) {
        console.log(error);
    }
}

const getEpisodeWithCategoryId = async(id) => {
    try {
        return await axios.get(BASE_URL + "/api/getEpisodeWithCategoryId/" + id).then((res) => {
            if (res) {
                return res.data
            }
        })
    } catch (error) {
        console.log(error);
    }
}

const categoryService = {
    getCategories,
    getCategoryById,
    getPodcastWithCategoryId,
    getEpisodeWithCategoryId,
}

export default categoryService;