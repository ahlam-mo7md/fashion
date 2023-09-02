<script setup>
import RadioInput from '@/components/RadioInput.vue'
import PlusIcon from '@/components/icons/Plus.vue'
import SmallTopic from '@/components/SmallTopic.vue'
import { ref } from 'vue'

const address = ref(null)
</script>

<template>
  <section class="row">
    <!-- Topic -->
    <SmallTopic data="اختر عنوانك:" />

    <!-- Address (1) -->
    <div class="col-lg-3 col-md-4 col-sm-6 mb-3">
      <RadioInput v-model="address" label="address-1" type="card" :checked="true" name="address">
        <div class="d-flex gap-3">
          <div class="d-flex flex-column gap-1">
            <span class="text-secondary fs-7">الدولة:</span>
            <span class="text-secondary fs-7">المدينة:</span>
            <span class="text-secondary fs-7">الحي:</span>
            <span class="text-secondary fs-7">الشارع:</span>
          </div>

          <div class="d-flex flex-column gap-1">
            <span class="fs-7">السعودية</span>
            <span class="fs-7">الرياض</span>
            <span class="fs-7">مكة</span>
            <span class="fs-7">مكة</span>
          </div>
        </div>
      </RadioInput>
    </div>

    <!-- Address (2) -->
    <div class="col-lg-3 col-md-4 col-sm-6 mb-3">
      <RadioInput v-model="address" label="address-2" type="card" name="address">
        <div class="d-flex gap-3">
          <div class="d-flex flex-column gap-1">
            <span class="text-secondary fs-7">الدولة:</span>
            <span class="text-secondary fs-7">المدينة:</span>
            <span class="text-secondary fs-7">الحي:</span>
            <span class="text-secondary fs-7">الشارع:</span>
          </div>

          <div class="d-flex flex-column gap-1">
            <span class="fs-7">السعودية</span>
            <span class="fs-7">الرياض</span>
            <span class="fs-7">مكة</span>
            <span class="fs-7">مكة</span>
          </div>
        </div>
      </RadioInput>
    </div>

    <!-- Add New Address -->
    <div class="col-lg-3 col-md-4 col-sm-6 mb-3">
      <RouterLink to="/add-address">
        <div
          class="card w-100 flex-row gap-2 justify-content-center align-items-center add-address"
        >
          <PlusIcon />
          <span class="text-secondary">أضف عنوان جديد</span>
        </div>
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.add-address {
  border-radius: 10px;
  border: 1px dashed rgba(23, 46, 61, 0.4);
  cursor: pointer;
  height: 130px;
}
</style>
