/* eslint-disable react/prop-types */


const PodcastDetailUpper = ({podcastDetail}) => {
    return (
        <div className='flex flex-col text-white mt-10 ml-16'>
            <div className='flex ml-16'>
                <div className='mt-16'>
                    <img src={podcastDetail.imageUrl} alt={podcastDetail.title} className='w-80 max-h-60 rounded-3xl object-cover' />
                </div>
                <div className='flex flex-col ml-4 mt-24'>
                    <h1 className='text-[16px] font-medium '> Podcast List </h1>
                    <h1 className='text-[60px] font-bold'> {podcastDetail.title} </h1>
                    <p className='ml-1 text-[15px]'> {podcastDetail.description} </p>
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
            
        </div>
    )
}

export default PodcastDetailUpper