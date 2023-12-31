/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import React, { useEffect, useState, useRef } from 'react'
import podcastListService from '../Services/PodcastList';
import userService from '../Services/User';
import { Link, useParams } from 'react-router-dom';
import Playlists from '../Components/Profile/Playlists';
import Subscription from '../Components/Profile/Subscription';

const Profile = ({ currentUser }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [newProfileImage, setNewProfileImage] = useState(null);
    const [userPlaylist, setUserPlaylist] = useState([]);
    const [user,setUser] = useState([]);
    const [getSubs, setGetSubs] = useState([]);
    
    const userId = useParams();

    const popUpRef = useRef(null);

    const handleEditClick = () => {
        setIsEditing(true);
    };
    const closePopUp = () => {
        setIsEditing(false);
    };

    const handleImageChange = (event) => {
        const selectedImage = event.target.files[0];
        setNewProfileImage(selectedImage);
        const overlayIcon = document.querySelector(".overlay-icon");
        if (overlayIcon) {
            overlayIcon.style.display = "none";
        }
    };


    const updateUser = async () => {
        const formData = new FormData();
        formData.append('firstName', firstName)
        formData.append('lastName', lastName)
        if (newProfileImage) {
            formData.append('profileImage', newProfileImage);
        }
        const response = await userService.updateUser(user._id,formData);
        if (response) {
            console.log("User successfuly uptaded");
            setIsEditing(false)
            window.location.reload();
        }
    }

    const getUserPlaylist = async () => {
        try {
            const response = await podcastListService.getUserPodcastList(userId.id);
            if (response) {
                setUserPlaylist(response)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getUserById = async() => {
        try {
            const response = await userService.getUserById(userId.id);
            if (response) {
                setUser(response)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const subscribe = async() => {
        try {
            const response = await userService.subscription(userId.id, currentUser._id);
            if(response) {
                console.log("Successfuly subscribed");
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getSubscription = async() => {
        try {
            const response = await userService.getSubscription(userId.id)
            if(response) {
                const users = []
                for(let i=0; i<response.length; i++){
                    const usersResponse = await userService.getUserById(response[i])
                    users.push(usersResponse);
                }
                setGetSubs(users);
                console.log(users);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUserById();

        getUserPlaylist();
        getSubscription();
    }, [userId])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popUpRef.current && !popUpRef.current.contains(event.target)) {
                closePopUp();
            }
        };

        if (isEditing) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isEditing]);


    return (
        <div className="text-white flex flex-col w-full">
            <div className="flex ml-10">
                <div onClick={handleEditClick} className="ml-12 mt-10 cursor-pointer">
                    <img
                        src={`http://localhost:8000/assets/${user.profileImage}`}
                        alt={user.firstName}
                        className="w-48 rounded-full"
                    />
                </div>
                <div className="flex flex-col mt-16 ml-7">
                    <h1 className="ml-1.5 ">Profile</h1>
                    <h1
                        onClick={handleEditClick}
                        className="text-[72px] font-medium cursor-pointer"
                    >

                        {user.firstName} {user.lastName}
                    </h1>
                    <div className='mt-4 flex '>
                        <a href="#" className="ml-1.5 text-[15px] text-gray-400">
                            {user?.subs?.length} Subscription
                        </a>
                        <a href="#" className="ml-1.5 text-[15px] text-gray-400">
                            {user?.subs?.length} Subscribers
                        </a>
                        <div className='flex flex-col'>
                            {currentUser?._id !== userId.id && (
                                <div>
                                    {!currentUser?.subs?.includes(userId.id) && (
                                        <button onClick={subscribe} className='ml-10 text-[15px] w-32 text-center items-center bg-red-800 rounded-md hover:bg-red-600 transition'> Subscribe </button>
                                    )}
                                    {currentUser?.subs?.includes(userId.id) && (
                                        <button className='ml-10 text-[15px] w-32 text-center items-center bg-green-800 rounded-md hover:bg-green-600 transition'> Subscribed </button>
                                    )}
                                </div>
                            )}
                        </div>
                        
                    </div>
                    
                </div>
            </div>

            {currentUser?._id === userId.id && isEditing && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div
                        className="bg-[#292929] p-4 rounded-lg shadow-md"
                        ref={popUpRef}
                    >
                        <div className="flex justify-between mb-5">
                            <h2 className="text-[24px] font-semibold mb-2 tracking-wider">

                                Profile details
                            </h2>
                            <button className="mr-2 text-[20px]" onClick={closePopUp}>

                                X
                            </button>
                        </div>
                        <div className="flex">
                            <div>
                                <label htmlFor="profileImageInput" className="cursor-pointer">
                                    <img
                                        className="w-52 rounded-full"
                                        src={newProfileImage ? URL.createObjectURL(newProfileImage) : `http://localhost:8000/assets/${user.profileImage}`}
                                        alt={user.firstName}
                                    />
                                    <div className="overlay-icon">
                                        <span className="material-icons">edit</span>
                                    </div>
                                </label>

                                <input
                                    id="profileImageInput"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    style={{ display: "none" }}
                                />
                            </div>

                            <div className="flex flex-col ml-4 justify-center items-center">
                                <input
                                    onChange={(e) => setFirstName(e.target.value)}
                                    type="text"
                                    placeholder={user.firstName}
                                    className="w-72 p-1 mb-2 border-transparent rounded bg-[#727272]"
                                />
                                <input
                                    onChange={(e) => setLastName(e.target.value)}
                                    type="text"
                                    placeholder={user.lastName}
                                    className="w-72 p-1 mb-2 border-transparent rounded bg-[#727272]"
                                />
                                <div className="w-full flex justify-end items-center mt-2">
                                    <button
                                        onClick={updateUser}
                                        className="bg-white text-black p-2 rounded-3xl hover:scale-105 font-semibold w-28 items-center "
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="flex flex-col w-full mt-32 ml-10">
                <div>
                    <h1 className="text-[28px] font-semibold ml-10"> Playlists </h1>
                </div>
                <Playlists userPlaylist={userPlaylist} />
            </div>

            <div className="flex flex-col w-full mt-32 ml-10 mb-60">
                <div>
                    <h1 className="text-[28px] font-semibold ml-10"> Subscriptions </h1>
                </div>
                <Subscription getSubs={getSubs} />
            </div>
        </div>
    );
}

export default Profile