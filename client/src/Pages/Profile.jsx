/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import podcastListService from '../Services/PodcastList';
import { Link } from 'react-router-dom';

const Profile = ({user}) => {
    if (user === null) {
        return <div>Loading...</div>; 
    }
    console.log(user);
    const [userPlaylist, setUserPlaylist] = useState([]);

    const getUserPlaylist = async()=> {
        try {
            const response = await podcastListService.getUserPodcastList(user._id);
            if (response) {
                setUserPlaylist(response)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=> {
        getUserPlaylist();
    },[])

    return (
        <div className='text-white flex flex-col w-full'>
            <div className='flex ml-10'>
                <div className='ml-12 mt-10'>
                    <img src={user?.profileImage} alt={user.firstName} className='w-48 rounded-full'/>
                </div>
                <div className='flex flex-col mt-16 ml-7'>
                    <h1 className='ml-1.5'>Profile</h1>
                    <h1 className='text-[72px] font-medium'> {user.firstName} {user.lastName} </h1>
                    <a href="#" className='ml-1.5'> {user.subs.length} Subscription </a>
                </div>
            </div>

            <div className='flex flex-col w-full mt-32 ml-10'>
                <div>
                    <h1 className='text-[28px] font-medium ml-10'> Playlists </h1>
                </div>
                <div className='flex mt-10'>
                    {userPlaylist.map((playlist)=> (
                        <div key={playlist._id} className='flex ml-10'>
                            <Link className='flex flex-col' to={`/podcastlist/${playlist._id}`}>
                                <div>
                                    <img src={playlist.imageUrl} alt={playlist.title} className='w-48 rounded-xl'/>
                                </div>
                                <div className='flex flex-col mt-2'>
                                    <h1 className='text-[18px] font-medium'> {playlist.title} </h1>
                                    <h1 className='text-[#727272]'> {playlist.createdBy} </h1>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex flex-col w-full mt-32 ml-10'>
                <div>
                    <h1 className='text-[28px] font-medium ml-10'> Subscriptions </h1>
                </div>
                <div className='flex mt-10'>
                    {user.subs.map((sub,index) => (
                        <div key={index} className='flex flex-col'>
                            <div className='flex flex-col'>
                                <div>
                                    <img src={sub.imageUrl} alt={sub.title} className='w-48'/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Profile