import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const fetchPlatings = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/platings/gallery`);
    return response.data.platings; 
  } catch (error) {
    console.error('Error fetching platings:', error);
    throw error; 
  }
};

export const fetchPlatingById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/api/platings/gallery/${id}`);
    return response.data.plating; 
  } catch (error) {
    console.error(`Error fetching plating with id ${id}:`, error);
    throw error;
  }
};

export const createPlating = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/platings/gallery`, data);
    return response.data.plating; 
  } catch (error) {
    console.error('Error creating plating:', error);
    throw error;
  }
};