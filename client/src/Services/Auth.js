import axios from 'axios';


const BASE_URL = "http://localhost:8000";



const signIn = async(email,password) => {
    try {
        return await axios.post(BASE_URL + "/auth/login", {
            email:email,
            password:password
        }).then((response) => {
            console.log(response);
            if (response.data) {
                localStorage.setItem("accessToken", JSON.stringify(response.data.accessToken));
                localStorage.setItem("refreshToken", JSON.stringify(response.data.refreshToken));
            }
            
            return response.data;
        })
    } catch (error) {
        console.log(error);
    }
}

const signUp = async(firstName, lastName, email, password) => {
    try {
        return await axios.post(BASE_URL + "/auth/register", {
            firstName,
            lastName,
            email,
            password
        }).then((res) => {
            console.log(res);
            if (res.data) {
                localStorage.setItem("user", JSON.stringify(res.data));
            }
        
            return res.data;
        })
    } catch (error) {
        console.log(error);
    }
}

const getCurrentUser = async() => {
    const accessToken = JSON.parse(localStorage.getItem("accessToken"));
    if (!accessToken) {
        console.log("Access token not found.");
        return null;
    }

    try {
        const response = await axios.get(BASE_URL + "/auth/getUserById", {
            headers: {
            Authorization: `Bearer ${accessToken}`
            }
        });
        return response
    } catch (error) {
        console.log(error);
    }
};

const logout = () => {
    localStorage.removeItem("user");
    window.location.reload(); 
};

const authService = {
    signIn,
    signUp,
    getCurrentUser,
    logout,
};

export default authService
