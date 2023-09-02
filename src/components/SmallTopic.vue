<script setup>
const props = defineProps({
  data: { type: String, required: true }
})
</script>

<template>
  <div class="border-bottom pt-3 pb-2 mb-3">
    <h1 class="fs-5 fw-medium">
      {{ data }}
    </h1>
  </div>
</template>
