<script setup>
import RadioInput from '@/components/RadioInput.vue'
import SmallTopic from '@/components/SmallTopic.vue'
import { ref } from 'vue'

const deliveryMethod = ref(null)
const deliveryCompany = ref(null)
</script>

<template>
  <section class="row">
    <!-- Delivery Method Topic -->
    <SmallTopic data="طريقة التوصيل:" />

    <!-- Delivery Method (1) -->
    <div class="col-sm-6 mb-3">
      <RadioInput
        v-model="deliveryMethod"
        label="deliveryMethod-1"
        type="card-line"
        :checked="true"
        name="deliveryMethod"
      >
        <span class="fs-6 label"> توصيل إلى موقعك </span>
      </RadioInput>
    </div>

    <!-- Delivery Method (2) -->
    <div class="col-sm-6 mb-3">
      <RadioInput
        v-model="deliveryMethod"
        label="deliveryMethod-2"
        type="card-line"
        name="deliveryMethod"
      >
        <span class="fs-6 label"> توصيل إلى موقعك </span>
      </RadioInput>
    </div>

    <!-- Delivery Company Topic -->
    <SmallTopic data="اختر احد شركات التوصيل:" />

    <!-- Delivery Company (1) -->
    <div class="col-md-6 mb-3">
      <RadioInput
        v-model="deliveryCompany"
        label="deliveryCompany-1"
        type="card"
        :checked="true"
        name="deliveryCompany"
      >
        <div class="d-flex flex-column gap-3">
          <div class="d-flex gap-3">
            <img src="@/assets/images/thabit.png" class="img-fluid" alt="" />
            <p class="fs-6 m-0">
              <span class="fw-medium">29.99 </span>
              ر.س
            </p>
          </div>

          <p class="fs-7 text-secondary m-0">
            مدة تجهيز الطلب <b class="text-secondary">خلال يومين</b> ومدة التوصيل
            <b class="text-secondary">خلال 4 أيام</b>
          </p>
        </div>
      </RadioInput>
    </div>

    <!-- Delivery Company (2) -->
    <div class="col-md-6 mb-3">
      <RadioInput
        v-model="deliveryCompany"
        label="deliveryCompany-2"
        type="card"
        name="deliveryCompany"
      >
        <div class="d-flex flex-column gap-3">
          <div class="d-flex gap-3">
            <img src="@/assets/images/aymakan.png" class="img-fluid" alt="" />
            <p class="fs-6 m-0">
              <span class="fw-medium">29.99 </span>
              ر.س
            </p>
          </div>

          <p class="fs-7 text-secondary m-0">
            مدة تجهيز الطلب <b class="text-secondary">خلال يومين</b> ومدة التوصيل
            <b class="text-secondary">خلال 4 أيام</b>
          </p>
        </div>
      </RadioInput>
    </div>
  </section>
</template>

<style>
.add-address {
  border-radius: 10px;
  border: 1px dashed rgba(23, 46, 61, 0.4);
  cursor: pointer;
}

.btn-check {
  + .radio-card {
    .label {
      color: rgba(23, 46, 61, 0.5);
    }
  }

  &:checked {
    + .radio-card {
      .label {
        color: var(--primary-base) !important;
      }
    }
  }
}
</style>
