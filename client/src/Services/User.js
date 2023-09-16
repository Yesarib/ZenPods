import axios from "axios";
import { BASE_URL } from "../config";


const getUserById = async(userId) => {
    try {
        return await axios.get(BASE_URL + "/auth/getUserById", {
            userId
        }).then((res) => {
            if(res){
                return res.data
            }
        })
    } catch (error) {
        console.log(error);
    }
}

const updateUser = async(userId,profileImage, firstName,lastName) => {
    try {
        return await axios.put(BASE_URL + "/auth/updateUser" + userId, {
            profileImage,
            firstName,
            lastName,
        }).then((res) => {
            if (res){
                return res.data
            }
        })
    } catch (error) {
        console.log(error);
    }
}


const userService = {
    getUserById,
    updateUser,
}

export default userService;