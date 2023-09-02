/* eslint-disable react/prop-types */

const PodcastListDetailUpper = ({podcastlist}) => {
    
    return (
        <div className='flex flex-col text-white mt-10 ml-16'>
            <div>
                -
            </div>
            <div className='flex ml-16'>
                <div className='mt-16'>
                    <img src={podcastlist.imageUrl} alt={podcastlist.title} className='w-80 rounded-3xl' />
                </div>
                <div className='flex flex-col ml-4 mt-24'>
                    <h1 className='text-[16px] font-medium '> Podcast List </h1>
                    <h1 className='text-[60px] font-bold'> {podcastlist.title} </h1>
                </div>
            </div>
            
            <div className='flex'>
                <div className='flex items-center mt-10 ml-20'>
                    <div className='w-16 h-16 bg-sky-800 rounded-full'> </div>
                </div>
                <div className='flex items-center mt-10 ml-10'>
                    <div className='w-16 h-16 bg-sky-800 rounded-full'></div>
                </div>
            </div>
            
        </div>
    )
}

export default PodcastListDetailUpper