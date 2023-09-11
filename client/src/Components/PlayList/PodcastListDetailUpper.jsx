/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect } from 'react';
import podcastListService from '../../Services/PodcastList';

const PodcastListDetailUpper = ({ podcastlist }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    const popUpRef = useRef(null);

    const handleEditClick = () => {
        setIsEditing(true);
    };
    const closePopUp = () => {
        setIsEditing(false);
    };

    const updatePodcastlist = async() => {
        const response = await podcastListService.updatePodcastlist(podcastlist._id , title, description, imageUrl, podcastlist);
        if (response){
            console.log("Playlist successfuly uptaded");
            setIsEditing(false)
            window.location.reload();
        }
    }

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
        <div className='flex flex-col text-white mt-10 ml-16'>
            <div>-</div>
            <div className='flex ml-16'>
                <div className='mt-16'>
                    <img src={podcastlist.imageUrl} alt={podcastlist.title} className='w-80 max-h-60 rounded-3xl object-cover' />
                </div>
                <div className='flex flex-col ml-4 mt-24'>
                    <h1 className='text-[16px] font-medium '> Podcast List </h1>
                    <h1 onClick={handleEditClick} className='text-[60px] font-bold cursor-pointer'> {podcastlist.title} </h1>
                </div>
            </div>

            <div className='flex'>
                <div className='flex items-center mt-10 ml-20 justify-center'>
                    <div className='w-16 h-16 bg-sky-800 rounded-full flex justify-center items-center cursor-pointer transform hover:scale-110'>
                        <img className='w-10 ml-1 ' src="/play.png" alt="play" />
                    </div>
                </div>
                <div className='flex items-center mt-10 ml-10 '>
                    <div className='flex items-center justify-center text-center'>
                        <h1 className='text-[48px] text-[#727272] cursor-pointer transform hover:text-white '> ... </h1>
                    </div>
                </div>
            </div>

            {/* Düzenleme Modalı */}
            {isEditing && (
                <div className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50'>
                    <div className='bg-[#292929] p-4 rounded-lg shadow-md' ref={popUpRef}>
                            <div className='flex justify-between mb-5'>
                                <h2 className='text-[24px] font-semibold mb-2 tracking-wider'> Edits details </h2>
                                <button className='mr-2 text-[20px]' onClick={closePopUp} > X </button>
                            </div>
                            <div className='flex'>
                                <div>
                                    <img className='w-80 rounded-xl' src={podcastlist.imageUrl} alt={podcastlist.title} />
                                </div>
                                <div className='flex flex-col ml-2'>
                                    <input onChange={(e) => setTitle(e.target.value)} type='text' placeholder={podcastlist.title} className='w-72 p-1 mb-2 border-transparent rounded bg-[#727272]' />
                                    <textarea onChange={(e) => setDescription(e.target.value)} name="desc" id="desc" cols="20" rows="5" className='w-full p-1 mt-2 border-transparent rounded bg-[#727272] pl-white' placeholder='Add an optional description'></textarea>
                                </div>
                            </div>
                            <div className='w-full flex justify-end mt-2'>
                                <button onClick={updatePodcastlist} className='bg-blue-500 text-white p-2 rounded-xl hover:bg-blue-600 w-36 items-center '>
                                    Save
                                </button>
                            </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PodcastListDetailUpper;
