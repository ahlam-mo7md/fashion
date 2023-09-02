<script setup>
import Gallery from '@/components/Gallery.vue'
import Topic from '@/components/Topic.vue'
import ProductsCarousel from '@/partials/ProductsCarousel.vue'
import ProductDetails from '@/partials/ProductDetails.vue'

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
  <main class="py-5">
    <div class="container-lg">
      <div class="row">
        <div class="col-lg-6 gallery-section mb-4">
          <Gallery />
        </div>

        <div class="col-lg-6">
          <ProductDetails />
        </div>

        <div class="col-12">
          <article class="mt-5">
            <span class="text_secondary fw-medium"> الوصف: </span>
            <p class="mt-2">
              يأتي البنطالون بتصميم أنيق وعصري يتماشى مع أحدث صيحات الموضة. يتميز بقَصَّته المستقيمة
              التي تبرز جمال التصميم ..يأتي البنطالون بتصميم أنيق وعصري يتماشى مع أحدث صيحات الموضة.
              يتميز بقَصَّته المستقيمة التي تبرز جمال التصميم .
            </p>
          </article>
        </div>
      </div>
    </div>

    <div class="mt-md-5 mt-0">
      <Topic :data="'قد يعجبك أيضاً '" />
      <ProductsCarousel :data="data" />
    </div>
  </main>
</template>

<style>
.gallery-section {
  height: 31rem;
}

@media screen and (max-width: 992px) {
  .gallery-section {
    height: 40rem;
  }
}

@media screen and (max-width: 768px) {
  .gallery-section {
    height: 100%;
  }
}
</style>
