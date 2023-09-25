/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

const Playlists = ({userPlaylist}) => {
    return (
        <div className="flex mt-10">
            {userPlaylist.map((playlist) => (
                <div key={playlist._id} className="flex ml-10">
                    <Link
                        className="flex flex-col"
                        to={`/podcastlist/${playlist._id}`}
                    >
                        <div>
                            <img
                                src={`http://localhost:8000/assets/${playlist.imageUrl}`}
                                alt={playlist.title}
                                className="w-48 rounded-xl max-h-[110px]"
                            />
                        </div>
                        <div className="flex flex-col mt-2">
                            <h1 className="text-[18px] font-medium">

                                {playlist.title}
                            </h1>
                            <h1 className="text-[#727272]"> {playlist.createdBy} </h1>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Playlists