/* eslint-disable react/prop-types */

import podcastListService from "../Services/PodcastList";
import PodcastList from "./PodcastList";

const Sidebar = ({ user }) => {
    const newPodcastList = async () => {
        const data = await podcastListService.newPodcastList(user._id);
        window.location.reload();
        console.log(data);
    };

    return (
        <div className="w-11/12 text-white font-sans mt-5 ml-7 flex flex-col justify-center items-center">
            <div className="w-full h-36 rounded-3xl  p-4">
                <div className="flex items-center mb-4">
                    <img src="/home.png" alt="home" className="w-8" />
                    <a href="/" className="ml-2 text-lg font-medium">
                        Home
                    </a>
                </div>
                <div className="flex items-center">
                    <img src="/search.png" alt="search" className="w-6 h-6" />
                    <a href="/search" className="ml-2 text-lg font-medium">
                        Search
                    </a>
                </div>
            </div>

            <div className="w-full rounded-3xl mt-7  p-4">
                <div className="w-full flex justify-between items-center">
                    <div className="flex items-center">
                        <img src="/books.png" alt="books" className="w-8" />
                        <h2 className="ml-2 text-lg font-medium">Your Library</h2>
                    </div>
                    {user && (
                        <div className="text-2xl font-medium">
                            <a href="/" onClick={newPodcastList} className="text-sm">
                                + Create Podcast List
                            </a>
                        </div>
                    )}
                </div>

                {!user && (
                    <>
                        <div className="w-full mt-5 bg-gray-600 rounded-xl p-4">
                            <h2 className="text-lg font-medium">Create your first Podcast List</h2>
                            <p className="mt-2 text-sm font-thin">Let's get started with your first podcast list</p>
                            <button className="h-7 mt-4 text-base font-medium tracking-normal bg-white text-black w-36 rounded-2xl">
                                Create Podcast
                            </button>
                        </div>

                        <div className="w-full mt-5 bg-gray-600 rounded-xl p-4">
                            <h2 className="text-lg font-medium">Let's find some podcasts to subscribe</h2>
                            <p className="mt-2 text-sm font-thin">Always new episodes</p>
                            <button className="h-7 mt-4 text-base font-medium tracking-normal bg-white text-black w-36 rounded-2xl">
                                Browse Podcast
                            </button>
                        </div>
                    </>
                )}

                {user && (
                    <div className="mt-8">
                        <h2 className="text-lg font-medium tracking-wider">Your Podcast List</h2>
                        <div className="flex justify-between items-center mt-2">
                            <div className="flex items-center">
                                <img src="/search.png" alt="search" className="w-5" />
                                <span className="ml-2 text-sm font-medium">Sort By</span>
                            </div>
                            <div className="mr-5">Sort Options Here</div>
                        </div>
                        <div className="mt-5">
                            <PodcastList user={user} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sidebar;
