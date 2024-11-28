import axios from 'axios';

export const fetchPlatings = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/platings/gallery`);
    return response.data.platings; 
  } catch (error) {
    console.error('Error fetching platings:', error);
    throw error; 
  }
};

export const fetchPlatingById = async (id) => {
    console.log('Fetching plating with id:', id);
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/platings/gallery/${id}`);
    return response.data.plating; 
  } catch (error) {
    console.error(`Error fetching plating with id ${id}:`, error);
    throw error;
  }
};

export const createPlating = async (data) => {
    try {
        console.log('Sending data to /api/platings/gallery:', data);
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/platings/gallery`, data);
      console.log('Server response:', response.data);
      return response.data.plating; 
    } catch (error) {
      console.error('Error creating plating:', error);
      if (error.response) {
        throw new Error(error.response.data.error || 'Server error occurred while creating plating');
      } else if (error.request) {
        throw new Error('No response from the server. Please check your internet connection.');
      } else {
        throw new Error('An unexpected error occurred while making the request.');
      }
    }
  };