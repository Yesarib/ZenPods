import axios from "axios";
import { BASE_URL } from "../config";


const getUserById = async(userId) => {
    try {
        return await axios.get(BASE_URL + "/auth/getUserById/"+userId).then((res) => {
            if(res){
                return res.data
            }
        })
    } catch (error) {
        console.log(error);
    }
}

const subscription = async(subscriptionUserId, userId) => {
    try {
        return await axios.post(BASE_URL + "/auth/subscription/" + subscriptionUserId, {
            userId
        }).then((res)=> {
            if(res){
                return res.data
            }
        })
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const getSubscription = async(userId) => {
    try {
        return await axios.get(BASE_URL + "/auth/getSubscription/"+userId).then((res) => {
            if(res) {
                return res.data
            }
        })
    } catch (error) {
        console.log(error);
    }
}

const addPlaylist = async(playlistId, userId) => {
    try {
        const response = await axios.post(BASE_URL + "/auth/addPlaylist/"+playlistId,{ userId })
        if (response) {
            return response.data
        }
    } catch (error) {
        console.log(error);
    }
}

const removePlaylist = async(playlistId, userId) => {
    try {
        const response = await axios.post(BASE_URL + "/auth/removePlaylist/"+playlistId,{ userId })
        if (response) {
            return response.data
        }
    } catch (error) {
        console.log(error);
    }
}


const updateUser = async (userId, formData) => {
    try {
        const response = await axios.put(BASE_URL + "/updateUser/" + userId, formData, {
            headers: {
                'Content-Type': 'multipart/form-data', 
            },
        });

        if (response) {
            return response.data;
        }
    } catch (error) {
        console.log(error);
        throw error; 
    }
};

const userService = {
    getUserById,
    updateUser,
    subscription,
    addPlaylist,
    removePlaylist,
    getSubscription
}

export default userService;