/* eslint-disable react/prop-types */
import { useState } from "react";
import authService from "../Services/Auth";

const Navbar = ({ user }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const logout = () => {
        authService.logout();
    };


    return (
        <div className="w-full flex justify-between items-center text-white mt-10">
            <div className="justify-center items-center text-center">
                <h2 className="text-[36px] ml-20 font-semibold tracking-widest ">
                    ZenPods
                </h2>
            </div>
            <div className="flex justify-evenly mr-20">
            {user && (
                    <div className="relative group flex">
                        <div className="mt-2">
                            <a href="/#"> Upload </a>
                        </div>
                    
                        <div onClick={toggleMenu} className="ml-5">
                            <img src={`http://localhost:8000/assets/${user.profileImage}`} alt={user.firstName} className="w-10 rounded-full"/>
                        </div>
                        
                        <div
                            className={`absolute ${isMenuOpen ? 'block' : 'hidden'} mt-2 py-2 bg-white border border-gray-200 shadow-lg rounded-lg`}
                        >
                            <a href={`/profile/${user._id}`} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                Profil
                            </a>
                            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={logout}>
                                Çıkış
                            </a>
                        </div>
                    </div>
                )}
                {!user && (
                    <>
                        <button className="text-gray-300 text-[18px] font-medium">
                            <a href="/register"> Sign Up</a>
                        </button>
                        <button className="ml-5 text-black text-[18px] font-medium bg-white tracking-wide w-32 h-9 rounded-3xl">
                            <a href="/login">Log in </a>
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
