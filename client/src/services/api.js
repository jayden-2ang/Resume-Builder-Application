import axios from 'axios';

const API_URL = 'http://localhost:5001/api';

export const getPersonal = () => axios.get(`${API_URL}/personal`);
export const addPersonal = (data) => axios.post(`${API_URL}/personal`, data);
export const deletePersonal = (id) => axios.delete(`${API_URL}/personal/${id}`);
export const getEducation = () => axios.get(`${API_URL}/education`);
export const addEducation = (data) => axios.post(`${API_URL}/education`, data);
export const deleteEducation = (id) => axios.delete(`${API_URL}/education/${id}`);
export const getSkill = () => axios.get(`${API_URL}/skill`);
export const addSkill = (data) => axios.post(`${API_URL}/skill`, data);
export const deleteSkill = (id) => axios.delete(`${API_URL}/skill/${id}`);
export const getProject = () => axios.get(`${API_URL}/project`);
export const addProject = (data) => axios.post(`${API_URL}/project`, data);
export const deleteProject = (id) => axios.delete(`${API_URL}/project/${id}`);
export const getWork = () => axios.get(`${API_URL}/work`);
export const addWork = (data) => axios.post(`${API_URL}/work`, data);
export const deleteWork = (id) => axios.delete(`${API_URL}/work/${id}`);
export const getVolunteer = () => axios.get(`${API_URL}/volunteer`);
export const addVolunteer = (data) => axios.post(`${API_URL}/volunteer`, data);
export const deleteVolunteer = (id) => axios.delete(`${API_URL}/volunteer/${id}`);