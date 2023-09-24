/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import PodcastDetail from '../Components/Upload/PodcastDetail'
import CreateEpisode from '../Components/Upload/CreateEpisode'

const UploadDetail = ({user}) => {
    const [showCreateEpisode, setShowCreateEpisode] = useState(false);

    const handleCreatePodcastClick = () => {
        setShowCreateEpisode(true);
    };

    const handleBackClick = () => {
        setShowCreateEpisode(false);
    };
    return (
        <div className="mt-20">
            {showCreateEpisode ? (
                <div>
                    <button
                        className="bg-sky-800 w-52 h-10 rounded-xl transform hover:scale-105"
                        onClick={handleBackClick}
                    >
                        Back
                    </button>
                    <CreateEpisode user={user} />
                </div>
            ) : (
                <div className="w-full flex flex-col text-white mx-auto p-4 rounded shadow-lg">
                    <div className="flex flex-col">
                        <div >
                            <PodcastDetail user={user}/>
                        </div>
                        <div className="flex justify-end items-center mr-20 mt-5 mb-16">
                            <button
                                className="bg-sky-800 w-52 h-10 rounded-xl transform hover:scale-105"
                                onClick={handleCreatePodcastClick}
                            >
                                Upload New Episode
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default UploadDetail