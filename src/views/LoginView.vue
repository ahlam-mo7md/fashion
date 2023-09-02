<script setup>
import ArrowRight from '@/components/icons/ArrowRight.vue'
import Topic from '@/components/Topic.vue'
import Select from '@/components/Select.vue'
import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'
import { ref } from 'vue'

const key = ref()
</script>

<template>
  <main class="container-lg py-5">
    <!-- Title -->
    <div class="d-md-flex d-none gap-3 align-items-center py-3">
      <ArrowRight class="pointer" />
      <span v class="fw-medium"> رجوع </span>
    </div>

    <!-- Form -->
    <div class="pt-3 pb-5 d-flex justify-content-center align-items-center auth-card">
      <div class="d-flex flex-column w-100">
        <img class="img-fluid w-25" src="@/assets/images/logo-light.png" />

        <Topic data="تسجيل الدخول" :line="true" justify="start" class="py-0" />

        <p class="text-secondary mb-4" style="width: 90%">
          أدخل رقم هاتفك , وسنقومك بإرسال الرمز على هاتفك للتحقق من دخولك
        </p>

        <div class="d-flex gap-2 w-100 mb-1">
          <Input v-modal="key" placeholder="أدخل رقم الهاتف" class="w-100" />
          <Select
            v-modal="key"
            label="key"
            :options="[
              { id: 1, name: +966 },
              { id: 2, name: +966 }
            ]"
            class="h-100"
          />
        </div>

        <RouterLink to="/otp">
          <Button label="إرسال الرمز" class="w-100" />
        </RouterLink>
      </div>
    </div>
  </main>
</template>

<style scoped>
.py-0 {
  padding: 1.5rem 0 !important;
}
</style>
