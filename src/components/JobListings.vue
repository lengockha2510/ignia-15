<script setup>
import { RouterLink } from "vue-router";
import JobListing from "./JobListing.vue";
import { reactive, defineProps, onMounted } from "vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { fetchJobs } from "@/services/jobService";

const props = defineProps({
  limit: {
    type: Number,
    default: null,
  },
  showButton: {
    type: Boolean,
    default: false,
  },
});

const state = reactive({
  jobs: [],
  isLoading: true,
});

onMounted(async () => {
  const res = await fetch("/jobs.json");
  const data = await res.json();
  console.log("Jobs fetched:", data); // 👈 BẮT BUỘC phải thấy dòng này
  state.jobs = data;
  state.isLoading = false;
});
</script>

<template>
  <p v-if="!state.isLoading && state.jobs.length === 0" class="text-center text-gray-500">
    Không có công việc nào được tìm thấy.
  </p>

  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>

      <!-- Loading -->
      <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
        <PulseLoader />
      </div>

      <!-- Job Listings -->
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JobListing v-for="job in state.jobs" :key="job.id" :job="job" />
      </div>
    </div>
  </section>

  <!-- View All Button -->
  <section v-if="props.showButton" class="m-auto max-w-lg my-10 px-6">
    <RouterLink
      to="/jobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs</RouterLink
    >
      
  </section>
</template>
