// jobService.js
const API_URL = '/jobs.json'; // Đã nằm trong public

export async function fetchJobs() {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Không thể tải danh sách công việc");
  }
  return await response.json();
}

export const fetchJobById = async (id) => {
  const jobs = await fetchJobs();
  return jobs.find(job => job.id === Number(id)); // Quan trọng: ép kiểu về số
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
  