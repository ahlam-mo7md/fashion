<script setup>
import Topic from '@/components/Topic.vue'
import CartItem from '@/partials/CartItem.vue'
import SummeryCart from '@/partials/SummeryCart.vue'
</script>

<template>
  <main class="container-lg pb-5">
    <div class="row">
      <div class="col-lg-7">
        <Topic data="سلة مشترياتك" :line="true" justify="start" />

        <!-- CartItems -->
        <div class="d-flex flex-column">
          <CartItem />
          <CartItem />
        </div>
      </div>

      <div class="col-lg-5 pt-lg-5 pt-3">
        <SummeryCart />
      </div>
    </div>
  </main>
</template>
