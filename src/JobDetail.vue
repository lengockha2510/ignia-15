<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const job = ref(null);

// Dữ liệu mẫu
const mockJobs = [
  { id: '1', title: 'Lập trình viên Vue', description: 'Xây dựng giao diện web.', salary: 30000 },
  { id: '2', title: 'Tester phần mềm', description: 'Kiểm thử ứng dụng.', salary: 20000 },
];

onMounted(() => {
  job.value = mockJobs.find(j => j.id === route.params.id);
});
</script>

<template>
  <div v-if="job">
    <h1>{{ job.title }}</h1>
    <p>{{ job.description }}</p>
    <p>Lương: {{ job.salary }} / Năm</p>
  </div>
  <div v-else>
    <p>Không tìm thấy công việc</p>
  </div>
</template>
