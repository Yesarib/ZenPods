/* eslint-disable react/prop-types */

import React,{ createContext, useContext, useState } from "react";

const PodcastContext = createContext();

export const usePodcastContext = () => {
    return useContext(PodcastContext);
};

export const PodcastProvider = ({ children }) => {
    const [nowPlayingPodcast, setNowPlayingPodcast] = useState(null);

    const startPodcast = (podcast) => {
        // Podcasti başlatma işlemi
        setNowPlayingPodcast(podcast);
    };

    const value = {
        nowPlayingPodcast,
        startPodcast,
    };

    return (
        <PodcastContext.Provider value={value}>
        {children}
        </PodcastContext.Provider>
    );
};

export default PodcastContext;