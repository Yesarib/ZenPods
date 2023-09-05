/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState, useEffect } from "react";

const PodcastContext = createContext();

export const usePodcastContext = () => {
    return useContext(PodcastContext);
};

export const PodcastProvider = ({ children }) => {
    const [nowPlayingPodcast, setNowPlayingPodcast] = useState(
        JSON.parse(localStorage.getItem("nowPlayingPodcast")) || null
    );

    useEffect(() => {
        localStorage.setItem("nowPlayingPodcast", JSON.stringify(nowPlayingPodcast));
    }, [nowPlayingPodcast]);

    const startPodcast = (podcast) => {
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
