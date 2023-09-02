<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import Card from '@/components/Card.vue'

const props = defineProps({
  data: Array
})

const breakpoints = {
  300: { slidesPerView: 1.7 },
  375: { slidesPerView: 2 },
  480: { slidesPerView: 2.5 },
  700: { slidesPerView: 3.5 },
  992: { slidesPerView: 4 },
  1400: { slidesPerView: 5 }
}
</script>

<template>
  <div class="position-relative">
    <!-- Carousel Navigation -->
    <!-- <div class="d-flex justify-content-between align-items-center w-100 position-absolute z-3 px-sm-4 px-2"
            style="top: 7rem;">
            <Next />
            <Prev />
        </div> -->

    <!-- Carousel Slides -->
    <div class="container-lg">
      <swiper
        :modules="[Navigation]"
        :navigation="true"
        dir="rtl"
        :breakpoints="breakpoints"
        :slidesPerView="4"
        :spaceBetween="8"
        class="mySwiper"
      >
        <swiper-slide v-for="(product, key) in data" :key="key">
          <Card :data="product" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
