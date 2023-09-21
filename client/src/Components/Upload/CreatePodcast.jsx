/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import podcastService from '../../Services/Podcasts'
// import categoryService from '../../Services/Category'
import { useNavigate } from 'react-router-dom'

const CreatePodcast = ({user}) => {
    const [podcastData, setPodcastData] = useState({
        title: '',
        description: '',
        imageUrl: '',
    });
    // const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    const categories = ['64fe0dc35aaceea46b6f83ce', '64fe0de65aaceea46b6f83d7']


    // const getCategories = async() => {
    //     const response = await categoryService.getCategories()
    // }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPodcastData({ ...podcastData, [name]: value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await podcastService.newPodcast(podcastData.title,podcastData.description,podcastData.imageUrl,user._id,categories);
        if (response) {
            navigate('/upload')
            console.log('Successfuly created');
        }
    }
    return (
        <div className="max-w-lg  p-4 text-white rounded shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Create Podcast</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={podcastData.title}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:border-blue-500 bg-transparent"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={podcastData.description}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500 bg-transparent"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="imageUrl" className="block">Image URL:</label>
                    <input
                        type="url"
                        id="imageUrl"
                        name="imageUrl"
                        value={podcastData.imageUrl}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500 bg-transparent"
                    />
                </div>
                
                <div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
                    >
                        Create
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreatePodcast