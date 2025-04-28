// netlify/functions/jobs.js
exports.handler = async (event) => {
    const id = event.path.split('/').pop(); // lấy id cuối URL
  
    const jobs = [
      { id: 1, title: 'Vue Dev', description: 'Làm web' },
      { id: 2, title: 'React Dev', description: 'Làm app' },
    ];
  
    const job = jobs.find((j) => j.id === Number(id));
  
    if (!job) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: 'Không tìm thấy công việc' }),
      };
    }
  
    return {
      statusCode: 200,
      body: JSON.stringify(job),
    };
  };
  