/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import episodesService from '../../Services/Episode';


const CreateEpisode = ({ user }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [audioUrl, setAudioUrl] = useState("");

  const navigate = useNavigate();
  const { id } = useParams()

  const handleInputChange = (e) => {
    const selectedAuido = e.target.files[0];
    setAudioUrl(selectedAuido);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('imageUrl', imageUrl);
    formData.append('audioUrl', audioUrl);
    formData.append('publishedBy', user._id)
    
    const response = await episodesService.newEpisode(id,formData)
    if (response) {
      // navigate('/upload')
      console.log('Episode successfuly created');
    }
  }
  return (
    <div className="max-w-lg  p-4 text-white rounded shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">New Episode</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-4 ">
          <label htmlFor="title" className="block">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value) }
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:border-blue-500 bg-transparent"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block">Description:</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500 bg-transparent"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="audioUrl" className="block">Auido:</label>
          <input
            type="file"
            id="audioUrl"
            name="audioUrl"
            onChange={handleInputChange}
            accept=".mp3, .ogg, .wav"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500 bg-transparent"
          />
        </div>

        <div>
          <button
          type='submit'
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateEpisode