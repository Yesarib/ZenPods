import React, { useEffect, useState } from 'react'
import authService from '../Services/Auth';

const Navbar = () => {
    const [user, setUser] = useState([]);

    const getUser = async() => {
        const user = await authService.getCurrentUser();
        if (user) {
            setUser(user.data.user);
        }
    }

    useEffect(() => {
        getUser();
    },[])

    const logout = () => {
        authService.logout();
    }

    console.log(user);
    return (
        <div className='w-full flex justify-around items-center text-white mt-10'>
            <div className='justify-center items-center text-center'>
                <h2 className='text-[20px] font-medium tracking-widest'> PodConnect </h2>
            </div>
            <div className='flex justify-evenly'>
                {user && (
                    <div >
                        <h2 className='text-white'> {user.firstName} </h2>
                    </div>
                )}
                {!user && (
                    <>                    
                        <button className='text-gray-300 text-[18px] font-medium'> Sign up </button>
                        <button className='ml-5 text-black text-[18px] font-medium bg-white tracking-wide w-32 h-9 rounded-3xl'> <a href="/login">Log in </a> </button>
                    </>
                )}
                
            </div>
        </div>
    )
}

export default Navbar