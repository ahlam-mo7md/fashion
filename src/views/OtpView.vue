<script setup>
import ArrowRight from '@/components/icons/ArrowRight.vue'
import Topic from '@/components/Topic.vue'
import Button from '@/components/Button.vue'
import { ref } from 'vue'
import OtpInput from 'vue3-otp-input'

const otpInput = ref(null)
const bindModal = ref('')

const handleOnComplete = (value) => {
  console.log('OTP completed: ', value)
}

const handleOnChange = (value) => {
  console.log('OTP changed: ', value)
}
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
      <div class="d-flex flex-column">
        <img class="img-fluid w-25" src="@/assets/images/logo-light.png" />

        <Topic data="أدخل الكود " :line="true" justify="start" class="py-0" />

        <p class="text-secondary mb-4">
          قم بكاتبة الكود الذي تم إرساله إلى الرقم
          <span class="text_secondary"> 96657676002 </span> بشكل صحيح لتسجيل الدخول
        </p>

        <div class="d-flex justify-content-between mb-4 otp-inputs">
          <OtpInput
            ref="otpInput"
            v-model:value="bindModal"
            input-classes="otp-input form-control"
            separator="-"
            :num-inputs="6"
            :should-auto-focus="true"
            input-type="letter-numeric"
            :placeholder="[' * ', ' * ', ' * ', ' * ', ' * ', ' * ']"
            @on-change="handleOnChange"
            @on-complete="handleOnComplete"
          />
        </div>

        <Button label="تسجيل الدخول " class="w-100" />
      </div>
    </div>
  </main>
</template>

<style scoped>
.py-0 {
  padding: 1.5rem 0 !important;
}
</style>
