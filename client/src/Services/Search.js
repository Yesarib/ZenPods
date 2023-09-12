import axios from 'axios';
import { BASE_URL } from '../config';


const search = async(searchTerm) => {
    try {
        return await axios.get(BASE_URL + `/api/search?q=${searchTerm}`).then((res) => {
            if (res) {
                return res.data
            }
        })
    } catch (error) {
        console.log(error);
    }
}

const searchService = {
    search,
}

export default searchService; 