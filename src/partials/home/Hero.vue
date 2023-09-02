<script setup>
import Button from '@/components/Button.vue'
</script>
<template>
  <section class="bg d-flex justify-content-start align-items-center px-5">
    <!-- Intro -->
    <div>
      <h1 class="fs-1 fw-medium d-flex flex-column mb-5">
        <span> تألَّق بأناقتك الشخصية </span>
        <span> مع مجموعتنا الفاخرة ! </span>
      </h1>

      <Button :label="'تصفح جديدنا'" :isOutline="true" :hoverAnimation="true" />
    </div>
  </section>
</template>

<style scoped>
.bg {
  background-image: url('@/assets/images/hero.png');
  background-position: center;
  background-size: cover;
  height: 600px;
}
</style>
