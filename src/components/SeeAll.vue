<script setup>
import MoreIcon from '@/components/icons/More.vue'
</script>

<template>
  <section class="w-100 py-4 d-flex justify-content-center">
    <a class="d-flex align-items-center gap-3 seeAll">
      <span class="fw-medium">عرض المزيد</span>
      <MoreIcon />
    </a>
  </section>
</template>

<style scoped>
.seeAll {
  cursor: pointer;
}
</style>
