<script setup>
import Button from '@/components/Button.vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  data: Object
})
</script>

<template>
  <RouterLink :to="`/products/${data.id}`" class="card shadow-none bg-transparent border-0 px-2">
    <!-- image -->
    <figure class="card-img border-0">
      <img :src="`../../src/assets/images/${data.image}`" class="img-fluid" :alt="data.name" />
    </figure>

    <!-- content -->
    <div class="d-flex flex-column gap-1">
      <!-- name -->
      <span v-text="data.name" class="fs-7 fw-medium text-start name_product"></span>

      <!-- price -->
      <div
        v-if="data.special_price"
        class="d-flex align-items-center gap-sm-4 flex-row mb-3 justify-content-sm-start justify-content-between"
      >
        <!-- price after discount -->
        <p class="d-flex align-items-center gap-1 m-0">
          <b v-text="data.special_price" class="text_secondary"></b>
          <span v-text="data.currency" class="text_secondary"></span>
        </p>

        <!-- price before discount -->
        <p
          class="d-flex fs-7 align-items-center gap-1 text-secondary text-decoration-line-through opacity-75 m-0"
        >
          {{ data.price }} {{ data.currency }}
        </p>
      </div>

      <div
        v-else
        class="d-flex align-items-center gap-sm-4 flex-row mb-3 justify-content-sm-start justify-content-between"
      >
        <!-- price after discount -->
        <p class="d-flex align-items-center gap-1 m-0">
          <b v-text="data.price" class="text_secondary"></b>
          <span v-text="data.currency" class="text_secondary"></span>
        </p>
      </div>
    </div>

    <!-- Add to cart -->
    <Button :label="'أضف إلى السلة'" :type="'secondary'" :isOutline="true" :small="true" />
  </RouterLink>
</template>

<style scoped>
.card:hover {
  > .card-img img {
    transform: scale(1.1);
    transition: all 0.4s ease-in-out;
  }
}

.card-img {
  width: 100%;
  overflow: hidden;
  aspect-ratio: 4/5;
}

.card-img img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  transform: scale(1);
  transition: all 0.4s ease-in-out;
}

.name_product {
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
  width: 100%;
  height: 1.5rem;
}
</style>
