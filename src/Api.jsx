import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const fetchPlatings = async () => {
  try {
    const response = await axios.get(`${API_URL}/gallery`);
    return response.data.platings;
  } catch (error) {
    console.error('Error fetching platings:', error);
  }
};

export const fetchPlatingById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/gallery/${id}`);
    return response.data.plating;
  } catch (error) {
    console.error(`Error fetching plating with id ${id}:`, error);
  }
};

export const createPlating = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/gallery`, data);
    return response.data.plating;
  } catch (error) {
    console.error('Error creating plating:', error);
  }
};