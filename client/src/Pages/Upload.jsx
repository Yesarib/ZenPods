/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import CreatePodcast from "../Components/Upload/CreatePodcast";
import Podcast from "../Components/Upload/Podcast";

const Upload = ({ user }) => {
    const [showCreatePodcast, setShowCreatePodcast] = useState(false);

    const handleCreatePodcastClick = () => {
        setShowCreatePodcast(true);
    };

    const handleBackClick = () => {
        setShowCreatePodcast(false);
    };

    return (
        <div className=" ml-16 mt-20">
            {showCreatePodcast ? (
                <div>
                    <button
                        className="bg-sky-800 w-52 h-10 rounded-xl transform hover:scale-105"
                        onClick={handleBackClick}
                    >
                        Back
                    </button>
                    <CreatePodcast user={user}/>
                </div>
            ) : (
                <div className="w-full flex flex-col text-white mx-auto p-4 rounded shadow-lg">
                    <div className="flex flex-col">
                        <div >
                            <Podcast user={user} />
                        </div>
                        <div className="flex justify-end items-center mr-20 mt-5">
                            <button
                                className="bg-sky-800 w-52 h-10 rounded-xl transform hover:scale-105"
                                onClick={handleCreatePodcastClick}
                            >
                                Create New Podcast
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Upload;
