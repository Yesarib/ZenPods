/* eslint-disable react/prop-types */

import podcastListService from "../Services/PodcastList"
import PodcastList from "./PodcastList";

const Sidebar = ({ user }) => {

    const newPodcastList = async() => {
        const data = await podcastListService.newPodcastList(user._id);
        window.location.reload();
        console.log(data);
    }

    return (
        <div className='w-11/12 text-white font-sans mt-5 ml-7 flex flex-col justify-center items-center'>
            <div className='w-full h-36 bg-[#000511] rounded-3xl'>
                <div className='flex '>
                    <img src="/home.png" alt="home" className='w-8 mt-4 ml-5'/>
                    <a href="/" className='mt-5 ml-5 text-[18px] font-medium'> Home </a>
                </div>
                <div className='flex'>
                    <img src="/search.png" alt="home" className='w-6 h-6 mt-7 ml-6'/>
                    <h2 className='mt-6 ml-5 text-[18px] font-medium'> Search </h2>
                </div>
            </div>

            <div className='w-full bg-[#000511] rounded-3xl mt-7 '>
                <div className='w-full flex justify-between'>
                    <div className='flex'>
                        <img src="/books.png" alt="books" className='w-8 ml-4 mt-3' />
                        <h2 className='mt-3.5 ml-5 text-[18px] font-medium'> Your Library </h2>
                    </div>
                    <div className='mt-2 text-[24px] font-medium'>
                        <a href={user ? "/" : "/login "} onClick={newPodcastList} className='text-[14px] mr-3'> + Create Podcastlist </a>
                    </div> 
                </div>

                {!user && (
                    <>
                        <div className='w-full flex flex-col mt-10 ml-5 bg-gray-600 rounded-xl '>
                            <h2 className='ml-5 mt-5 text-[17px] font-medium'> Create your first Podcastlist </h2>
                            <p className='ml-5 mt-2 text-[14px] font-thin'> Let's get first Podcastlist </p>
                            <button className='h-7 ml-5 mt-8 mb-5 text-[15px] font-medium tracking-normal bg-white text-black w-36 rounded-2xl'> Create Podcast </button>
                        </div>

                        <div className='w-full flex flex-col mt-10 ml-5 bg-gray-600 rounded-xl '>
                            <h2 className='ml-5 mt-5 text-[17px] font-medium'> Let's find some podcasts to subscribe </h2>
                            <p className='ml-5 mt-2 text-[14px] font-thin'> Always new episodes </p>
                            <button className='h-7 ml-5 mt-8 mb-5 text-[15px] font-medium tracking-normal bg-white text-black w-36 rounded-2xl'> Browse Podcast </button>
                        </div>
                    </>
                )}

                {user && (
                    <div className='flex flex-col mt-16 ml-3'>
                        <div>
                            <h2 className='ml-2 font-medium tracking-wider'> Your Podcast List </h2>
                        </div>
                        <div className='flex justify-between mt-2'>
                            <div className='mt-3'>
                                <img src="/search.png" alt="search" className='w-5 font-medium ml-2' />
                            </div>
                            <div className='mt-3 mr-5'>
                                Sort By
                            </div>
                        </div>
                        <div className='mt-10'>
                            <PodcastList user={user}/>
                        </div>
                    </div>
                )}
                
            </div>

        </div>
    )
}

export default Sidebar