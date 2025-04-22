// jobService.js
const API_URL = 'http://localhost:5173/jobs';
export async function fetchJobs() {
  const response = await fetch('/jobs.json');
  const jobs = await response.json();
  return jobs;
}
  
  export const fetchJobById = async (id) => {
    const jobs = await fetchJobs();
    return jobs.find(job => job.id === id);
  };
  
  // Các chức năng dưới đây chỉ để minh họa, không hoạt động nếu không có backend thực sự
  export const deleteJob = async (id) => {
    console.warn('⚠️ deleteJob chỉ hoạt động khi có backend API thực sự.');
  };
  
  export const addJob = async (data) => {
    console.warn('⚠️ addJob chỉ hoạt động khi có backend API thực sự.');
  };
  
  export const updateJob = async (id, data) => {
    console.warn('⚠️ updateJob chỉ hoạt động khi có backend API thực sự.');
  };
  