// jobService.js
export const fetchJobs = () => {
    return fetch('/jobs.json')
      .then(res => {
        if (!res.ok) {
          throw new Error('Không thể lấy danh sách việc làm');
        }
        return res.json();
      });
  };
  
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
  