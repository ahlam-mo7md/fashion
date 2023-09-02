<script setup>
import RadioInput from '@/components/RadioInput.vue'
import SmallTopic from '@/components/SmallTopic.vue'
import { ref } from 'vue'

const paymentMethod = ref(null)
</script>

<template>
  <article>
    <!-- Topic -->
    <SmallTopic data="طريقة الدفع" />

    <div class="d-flex gap-3 flex-column">
      <!-- Payment Method (1) -->
      <RadioInput
        v-model="paymentMethod"
        label="paymentMethod-1"
        type="card-line"
        :checked="true"
        name="paymentMethod"
      >
        <div class="d-flex align-items-center gap-3">
          <img src="@/assets/images/mada.svg" class="img-fluid" alt="" />
          <p class="fs-6 m-0 label">بطاقة مدى البنكية</p>
        </div>
      </RadioInput>

      <!-- Payment Method (2) -->
      <RadioInput
        v-model="paymentMethod"
        label="paymentMethod-2"
        type="card-line"
        name="paymentMethod"
      >
        <div class="d-flex align-items-center gap-3">
          <img src="@/assets/images/master.svg" class="img-fluid" alt="" />
          <p class="fs-6 m-0 label">بطاقة إئتمانية</p>
        </div>
      </RadioInput>

      <!-- Payment Method (3) -->
      <RadioInput
        v-model="paymentMethod"
        label="paymentMethod-3"
        type="card-line"
        name="paymentMethod"
      >
        <div class="d-flex align-items-center gap-3">
          <img src="@/assets/images/pay.svg" class="img-fluid" alt="" />
          <p class="fs-6 m-0 label">الدفع من خلال أبل باي</p>
        </div>
      </RadioInput>

      <!-- Payment Method (4) -->
      <RadioInput
        v-model="paymentMethod"
        label="paymentMethod-4"
        type="card-line"
        name="paymentMethod"
      >
        <div class="d-flex align-items-center gap-3">
          <img src="@/assets/images/visa.svg" class="img-fluid" alt="" />
          <p class="fs-6 m-0 label">الدفع من خلال فيزا</p>
        </div>
      </RadioInput>
    </div>
  </article>
</template>
