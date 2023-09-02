import Episodes from '../Components/PodcastDetail/Episodes'
import PodcastDetailUpper from '../Components/PodcastDetail/PodcastDetailUpper'

const Podcast = () => {


    return (
        <div className='text-white w-full flex'>
            <div className="w-full">
                <PodcastDetailUpper />
                <Episodes />
            </div>
        </div>
    )
}

export default Podcast