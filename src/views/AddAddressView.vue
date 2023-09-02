<script setup>
import ArrowRight from '@/components/icons/ArrowRight.vue'
import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'
import { ref } from 'vue'

const country = ref()
const city = ref()
const neighborhood = ref()
const street = ref()
</script>

<template>
  <main class="container-lg py-5">
    <div class="d-flex gap-3 align-items-center py-3">
      <RouterLink to="/checkout">
        <ArrowRight class="pointer" />
      </RouterLink>
      <span v class="fw-medium"> إضافة عنوان جديد:</span>
    </div>

    <!-- Form -->
    <div class="row">
      <div class="col-12 mb-5">
        <div class="bg-body-secondary opacity-25 map"></div>
      </div>

      <div class="col-sm-6 mb-sm-0 mb-3">
        <Input v-model="country" placeholder="الدولة" bg="secondary" />
      </div>

      <div class="col-sm-6 mb-sm-0 mb-3">
        <Input v-model="city" placeholder="المدينة" bg="secondary" />
      </div>

      <div class="col-sm-6 mb-sm-0 mb-3">
        <Input v-model="neighborhood" placeholder="الحي" bg="secondary" />
      </div>

      <div class="col-sm-6 mb-sm-0 mb-3">
        <Input v-model="street" placeholder="الشارع" bg="secondary" />
      </div>

      <div class="col-12 d-flex justify-content-end gap-2">
        <Button label="إلغاء" type="canceled" :small="true" />
        <Button label="حفظ" :small="true" />
      </div>
    </div>
  </main>
</template>

<style scoped>
.map {
  height: 350px;

  @media screen and (max-width: 768px) {
    height: 200px;
  }
}

.btn.btn-sm {
  width: 100% !important;
  padding: auto;

  @media screen and (min-width: 576px) {
    padding: 0 4rem;
    width: fit-content !important;
  }
}
</style>
