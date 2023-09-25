/* eslint-disable react/prop-types */
import {Link} from 'react-router-dom'

const Subscription = ({getSubs}) => {
    return (
        <div className="flex mt-10">
            {getSubs?.map((sub, index) => (
                <Link key={index} to={`/profile/${sub._id}`}>
                    <div className="flex flex-col ml-10">
                        <div className="flex flex-col">
                            <div>
                                <img src={`http://localhost:8000/assets/${sub.profileImage}` || sub.profileImage} alt={sub.firstName} className="w-32 rounded-full max-h-[110px]" />
                            </div>
                            <div className='mt-2 text-center'>
                                <h1 className='text-[18px] font-medium'> {sub.firstName} {sub.lastName} </h1>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Subscription