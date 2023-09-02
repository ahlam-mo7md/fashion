<script setup>
import PaymentMethod from '@/partials/checkout/PaymentMethod.vue'
import OrderDetails from '@/partials/checkout/OrderDetails.vue'
import OtherDetails from '@/partials/checkout/OtherDetails.vue'
import ArrowRightIcon from '@/components/icons/ArrowRight.vue'
import Step from '@/components/Step.vue'
</script>

<template>
  <main class="container-lg py-5">
    <!-- Title -->
    <RouterLink to="/checkout">
      <div class="d-flex gap-3 align-items-center pb-3">
        <ArrowRightIcon class="pointer" />
        <span class="fw-medium"> العنوان و التوصيل </span>
      </div>
    </RouterLink>

    <div class="row w-100 m-0">
      <!-- Navs Tabs -->
      <div class="col-12 d-flex align-items-center justify-content-center mt-4 mt-md-5 gap-2 w-100">
        <Step :step="{ num: 1, title: 'العنوان و التوصيل', state: 'completed' }" />
        <Step :step="{ num: 2, title: 'الدفع و التأكيد', state: 'active' }" />
      </div>

      <!-- Navs Content -->
      <div class="col-12">
        <div class="py-5 row">
          <div class="col-lg-6 col-md-6 d-flex flex-column gap-4">
            <PaymentMethod />
            <OtherDetails />
          </div>

          <div class="col-lg-1 d-lg-block d-none"></div>

          <div class="col-lg-5 col-md-6">
            <OrderDetails />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
