<script setup>
import HeroSection from '@/partials/home/Hero.vue'
import Categories from '@/partials/home/Categories.vue'
import Topic from '@/components/Topic.vue'
import ProductsCarousel from '@/partials/ProductsCarousel.vue'
import SeeAll from '@/components/SeeAll.vue'
import Partners from '@/partials/home/Partners.vue'

const data = [
  {
    id: '0',
    name: 'جاكيت رجالي',
    image: 'product-1.png',
    price: '50.99',
    currency: 'ر.س',
    special_price: '20.99'
  },
  {
    id: '1',
    name: 'بنطلون رجالي',
    image: 'product-2.png',
    price: '50.99',
    currency: 'ر.س',
    special_price: '20.99'
  },
  {
    id: '2',
    name: 'بنطلون رجالي',
    image: 'product-3.png',
    price: '29.99',
    currency: 'ر.س',
    special_price: null
  },
  {
    id: '3',
    name: 'بنطلون رجالي',
    image: 'product-4.png',
    price: '29.99',
    currency: 'ر.س',
    special_price: null
  },
  {
    id: '4',
    name: 'بنطلون رجالي',
    image: 'product-2.png',
    price: '29.99',
    currency: 'ر.س',
    special_price: null
  },
  {
    id: '5',
    name: 'بنطلون رجالي',
    image: 'product-1.png',
    price: '29.99',
    currency: 'ر.س',
    special_price: null
  }
]
</script>

<template>
  <HeroSection />

  <main>
    <section class="container-lg">
      <Categories />
    </section>

    <section class="mt-5">
      <Topic :data="'الأكثر مبيعاً'" />
      <ProductsCarousel :data="data" />
      <SeeAll />
    </section>

    <section class="mt-5">
      <Topic :data="'البضائع المخفضة'" />
      <ProductsCarousel :data="data" />
      <SeeAll />
    </section>

    <section class="my-5">
      <Topic :data="'الشركاء'" />
      <Partners />
    </section>
  </main>
</template>
