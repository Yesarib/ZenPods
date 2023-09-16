import React, { useState } from 'react'
import authService from '../Services/Auth';
import { useNavigate } from 'react-router-dom'


const Register = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();


    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            await authService.signUp(firstName, lastName, email, password).then(() => {
                navigate("");
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='w-full mt-20 justify-center items-center text-center text-white'>
            <form onSubmit={handleSubmit}>
                <h2 className='text-[36px] font-semibold tracking-widest'> PodConnect </h2>
                <h2 className='text-[28px] mt-10 font-semibold tracking-widest'> Sign Up </h2>
                <div className='mt-10'>
                    <p className='text-[17px]'> Sign Up with </p>
                    <div className='flex flex-col justify-center items-center mt-5'>
                        <div className='border-2 rounded-3xl w-96 h-10 flex items-center justify-center mt-5'> With Google </div>
                        <div className='border-2 rounded-3xl w-96 h-10 flex items-center justify-center mt-5'> With Facebook </div>
                        <div className='border-2 rounded-3xl w-96 h-10 flex items-center justify-center mt-5'> With Twitter </div>
                    </div>                
                </div>
                <div className='flex items-center mt-10 justify-center'>
                    <div className='w-1/2 border-t border-gray-600'></div>
                </div>
                <div className='mt-6 w-full flex flex-col items-center'>
                    <div className='w-96'>
                        <label className='text-left block text-[15px] mt-2 ml-1 font-medium text-gray-300'>First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            placeholder='First Name'
                            onInput={(e) => {
                                e.preventDefault()
                                setFirstName(e.target.value)
                            }}
                            className='w-full bg-transparent mt-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50'
                        />
                    </div>
                    <div className='w-96'>
                        <label className='text-left block text-[15px] mt-2 ml-1 font-medium text-gray-300'>Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            placeholder='Last Name'
                            onInput={(e) => {
                                e.preventDefault()
                                setLastName(e.target.value)
                            }}
                            className='w-full bg-transparent mt-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50'
                        />
                    </div>
                    <div className='w-96'>
                        <label className='text-left block text-[15px] mt-2 ml-1 font-medium text-gray-300'>Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder='Email'
                            autoComplete='off'
                            onInput={(e) => {
                                e.preventDefault()
                                setEmail(e.target.value)
                            }}
                            className='w-full bg-transparent mt-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50'
                        />
                    </div>
                    <div className='w-96 '>
                        <label className='text-left block text-[15px] mt-2 ml-1 font-medium text-gray-300'>Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder='Password'
                            onInput={(e) => {
                                e.preventDefault()
                                setPassword(e.target.value)
                            }}
                            className='w-full bg-transparent mt-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50'
                        />
                    </div>
                    <div className='w-96 flex mt-5 justify-center'>
                        <button className='w-full bg-cyan-600 h-12 rounded-3xl text-[18px] font-semibold tracking-widest transform hover:bg-cyan-800 transition duration-500'> Sign Up </button>
                    </div>
                    <div className='flex items-center mt-10 justify-center'>
                        <div className='w-1/2 border-t border-gray-600'></div>
                    </div>
                    <div className='mb-5'>
                        <label> Do you have an account? <a href="/login" className='underline font-medium'> Log in now!</a> </label>
                    </div>
                </div>
            </form>
            
        </div>
    )
}

export default Register