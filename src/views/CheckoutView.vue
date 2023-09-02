<script setup>
import Addresses from '@/partials/checkout/Addresses.vue'
import Delivery from '@/partials/checkout/Delivery.vue'
import Button from '@/components/Button.vue'
import Step from '@/components/Step.vue'
import ArrowRightIcon from '@/components/icons/ArrowRight.vue'
</script>

<template>
  <main class="container-lg py-5">
    <!-- Title -->
    <RouterLink to="/cart">
      <div class="d-flex gap-3 align-items-center pb-3">
        <ArrowRightIcon class="pointer" />
        <span class="fw-medium"> العنوان و التوصيل </span>
      </div>
    </RouterLink>

    <div class="row w-100 m-0">
      <!-- Navs Tabs -->
      <div class="col-12 d-flex align-items-center justify-content-center mt-4 mt-md-5 gap-2 w-100">
        <Step :step="{ num: 1, title: 'العنوان و التوصيل', state: 'active' }" />
        <Step :step="{ num: 2, title: 'الدفع و التأكيد', state: '' }" />
      </div>

      <!-- Navs Contents -->
      <div class="col-12">
        <div class="py-5 d-flex flex-column gap-5">
          <Addresses />
          <Delivery />
          <div class="d-flex justify-content-end">
            <RouterLink to="/checkout/confirmation">
              <Button label="التالي" class="w-50" />
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
