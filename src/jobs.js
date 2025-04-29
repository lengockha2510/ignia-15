// src/jobs.js
export const jobs = [
    { id: 1, title: "Frontend Developer", description: "...", salary: 1000 },
    //...
  ];
  
  // trong component
  import { jobs } from '@/jobs';
  
  const job = jobs.find(j => j.id === Number(route.params.id));
  