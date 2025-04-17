import axios from 'axios';

export const fetchJobs = () => axios.get('/api/jobs');
export const fetchJobById = (id) => axios.get(`/api/jobs/${id}`);
export const deleteJob = (id) => axios.delete(`/api/jobs/${id}`);
export const addJob = (data) => axios.post('/api/jobs', data);
export const updateJob = (id, data) => axios.put(`/api/jobs/${id}`, data);
