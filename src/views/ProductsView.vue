<script setup>
import Topic from '@/components/Topic.vue'
import Dropdown from '@/components/Dropdown.vue'
import Card from '@/components/Card.vue'
import Pagination from '@/components/Pagination.vue'

import Filter from '@/components/icons/Filter.vue'
import SortBy from '@/components/icons/SortBy.vue'
import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'
import { ref } from 'vue'

const from = ref(null)
const to = ref(null)

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
  }
]
</script>

<template>
  <main>
    <!-- Topic -->
    <section class="container-lg">
      <Topic :data="'جينز رجالي'" :line="true" />
      <p class="text-secondary fs-6 text-center">تصفح جميع المنتجات التي ستنال إعجابكم لدينا</p>
    </section>

    <!-- Filter -->
    <section
      class="container-lg d-flex pt-2 pb-5 justify-content-center flex-sm-row flex-column gap-4"
    >
      <Dropdown>
        <template #title>
          <Filter />
          <span> فلترة المنتجات </span>
        </template>

        <template #body>
          <form>
            <span class="fs-7 mb-2 d-inline-block">فلترة حسب السعر</span>
            <Input v-model="from" placeholder="من" type="text" groupText="SAR" />
            <Input v-model="to" placeholder="إلى" type="text" groupText="SAR" />
            <Button label="فلترة" :small="true" class="w-100 mt-1" />
          </form>
        </template>
      </Dropdown>

      <Dropdown>
        <template #title>
          <SortBy />
          <span> ترتيب حسب </span>
        </template>

        <template #body>
          <form class="d-flex flex-column gap-3">
            <span>الأحدث</span>
            <span>الأكثر مبيعاً</span>
            <span>البضائع المخفضة</span>
            <span>الأعلى سعراً</span>
            <span>الأقل سعراً</span>
          </form>
        </template>
      </Dropdown>
    </section>

    <!-- Products -->
    <section class="container-lg">
      <div class="row">
        <div v-for="product in data" class="col-lg-3 col-md-4 col-6 px-md-2 px-1 mb-5">
          <Card :data="product" />
        </div>
        <div v-for="product in data" class="col-lg-3 col-md-4 col-6 px-md-2 px-1 mb-5">
          <Card :data="product" />
        </div>
        <div v-for="product in data" class="col-lg-3 col-md-4 col-6 px-md-2 px-1 mb-5">
          <Card :data="product" />
        </div>

        <div class="col-12">
          <Pagination />
        </div>
      </div>
    </section>
  </main>
</template>
