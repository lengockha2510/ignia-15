const API_URL = '/jobs.json'; // Tệp JSON nằm trong thư mục public

// Lấy toàn bộ danh sách công việc
export async function fetchJobs() {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Không thể tải danh sách công việc');
  }
  const jobs = await response.json();
  return jobs;
}

// Lấy chi tiết 1 công việc theo ID
export const fetchJobById = async (id) => {
  const jobs = await fetchJobs();
  return jobs.find(job => job.id === Number(id)); // So sánh số
};

// ⚠️ Các chức năng sau chỉ hoạt động nếu có backend thật
export const deleteJob = async (id) => {
  console.warn('⚠️ deleteJob chỉ hoạt động khi có backend API thực sự.');
};

export const addJob = async (data) => {
  console.warn('⚠️ addJob chỉ hoạt động khi có backend API thực sự.');
};

export const updateJob = async (id, data) => {
  console.warn('⚠️ updateJob chỉ hoạt động khi có backend API thực sự.');
};
