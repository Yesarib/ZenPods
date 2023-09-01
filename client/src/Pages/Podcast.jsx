import PodcastDetail from '../Components/PodcastDetail'
import Sidebar from '../Components/Sidebar'

const Podcast = () => {
    return (
        <div className='text-white w-full flex'>
            <div className='w-1/4 flex flex-col h-screen rounded-xl'>
                <Sidebar />

            </div>
            <div className="w-full">
                <PodcastDetail />
            </div>
        </div>
    )
}

export default Podcast