<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { fetchJobById } from '../services/jobService';

const route = useRoute();
const job = ref(null);

onMounted(async () => {
  job.value = await fetchJobById(route.params.id);
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
