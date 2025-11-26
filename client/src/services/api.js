// services/api.js
import axios from 'axios';
const API_URL = 'http://localhost:5001/api';

export const getEducation = () => axios.get(`${API_URL}/education`);
export const addEducation = (data) => axios.post(`${API_URL}/education`, data);
export const deleteEducation = (id) => axios.delete(`${API_URL}/education/${id}`);