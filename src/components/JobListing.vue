<script setup>
import { RouterLink } from "vue-router";
import { defineProps, ref, computed } from "vue";

const props = defineProps({
  job: Object,
});
// console.log("job",props.job)
const showFullDescription = ref(false);

const toggleFullDescription = () => {
  showFullDescription.value = !showFullDescription.value;
};

// const truncatedDescription = computed(() => {
//   let description = props.job.description;
//   if (!showFullDescription.value) {
//     description = description.substring(0, 90) + "...";
//   }
//   return description;
// });
</script>

<template>
  <!-- <div>
    {{ job[0].type }}
    {{ job[0].company }}
  </div> -->
  <div class="bg-white rounded-xl shadow-md relative">
    <div class="p-4" v-for="jobDetail in job" :key="jobDetail.id">

      <div class="mb-6">
        <h2>job</h2>
        <div class="text-gray-600 my-2">{{ jobDetail.type }}</div>
        <h3 class="text-xl font-bold">{{ jobDetail.title }}</h3>
      </div>

      <div class="mb-5">
        <!-- <div>
          {{ truncatedDescription }}
        </div> -->
        <button
          @click="toggleFullDescription"
          class="text-green-500 hover:text-green-600 mb-5"
        >
          {{ showFullDescription ? "Less" : "More" }}
        </button>
      </div>

      <h3 class="text-green-500 mb-2">{{ jobDetail.salary }} / Year</h3>

      <div class="border border-gray-100 mb-5"></div>

      <div class="flex flex-col lg:flex-row justify-between mb-4">
        <div class="text-orange-700 mb-3">
          <i class="pi pi-map-marker text-orange-700"></i>
          {{ jobDetail.location }}
        </div>
        <RouterLink
          :to="'/jobs/' + jobDetail.id"
          class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
        >
          Read More
        </RouterLink>
      </div>
    </div>
  </div>
</template>
