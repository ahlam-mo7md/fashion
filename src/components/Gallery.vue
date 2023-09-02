<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { ref } from 'vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

let thumbsSwiper = ref(null)
let thumbsSwiper2 = ref(null)

const setThumbsSwiper = (swiper) => (thumbsSwiper.value = swiper)

const setThumbsSwiper2 = (swiper) => (thumbsSwiper2.value = swiper)

const modules = [FreeMode, Navigation, Thumbs]

const breakpoints = {
  700: { slidesPerView: 4 },
  992: { slidesPerView: 3 }
}
</script>

<template>
  <div class="row h-100">
    <!-- gallery_item in desktop -->
    <div class="col-lg-3 col-md-2 h-100 d-md-block d-none">
      <swiper
        :direction="'vertical'"
        @swiper="setThumbsSwiper"
        :spaceBetween="10"
        :slidesPerView="3"
        :breakpoints="breakpoints"
        :freeMode="true"
        :watchSlidesProgress="true"
        :modules="modules"
        class="h-100"
      >
        <swiper-slide v-for="img in 4">
          <figure class="gallery_item border-0 p-1 m-0">
            <img :src="`../../src/assets/images/product-${img}.png`" class="img-fluid" />
          </figure>
        </swiper-slide>
      </swiper>
    </div>

    <!-- gallery In Desktop -->
    <div class="col-lg-9 col-md-10 h-100 d-md-block d-none">
      <swiper
        :spaceBetween="10"
        :thumbs="{ swiper: thumbsSwiper }"
        :modules="modules"
        class="mySwiper2 h-100"
      >
        <swiper-slide v-for="img in 4">
          <figure class="gallery border-0 p-1 m-0">
            <img :src="`../../src/assets/images/product-${img}.png`" class="img-fluid" />
          </figure>
        </swiper-slide>
      </swiper>
    </div>

    <!-- gallery In Mobile -->
    <div class="col-lg-9 col-md-10 h-100 d-block d-md-none">
      <swiper
        :spaceBetween="10"
        :thumbs="{ swiper: thumbsSwiper2 }"
        :modules="modules"
        class="mySwiper2 h-100"
      >
        <swiper-slide v-for="img in 4">
          <figure class="gallery border-0 p-1 m-0">
            <img :src="`../../src/assets/images/product-${img}.png`" class="img-fluid" />
          </figure>
        </swiper-slide>
      </swiper>
    </div>

    <!-- gallery_item in mobile -->
    <div class="col-12 h-100 d-block d-md-none">
      <swiper
        @swiper="setThumbsSwiper2"
        :spaceBetween="10"
        :slidesPerView="4"
        :freeMode="true"
        :watchSlidesProgress="true"
        :modules="modules"
        class="h-100"
      >
        <swiper-slide v-for="img in 4">
          <figure class="gallery_item border-0 p-1 m-0">
            <img :src="`../../src/assets/images/product-${img}.png`" class="img-fluid" />
          </figure>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style scoped>
.swiper-1 .swiper-free-mode > .swiper-wrapper {
  justify-content: space-between;
}

.gallery_item {
  height: 160px;
  width: 100%;
  aspect-ratio: 4/5;
}

@media screen and (max-width: 768px) {
  .gallery_item {
    height: 100%;
  }
}

.gallery_item img,
.gallery img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.gallery {
  height: 100%;
  width: 100%;
  aspect-ratio: 4/5;
}
</style>
