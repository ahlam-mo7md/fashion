<script setup>
import Input from '@/components/Input.vue'
</script>

<template>
  <section>
    <h1 class="fs-5 mb-5">معلومات الحساب</h1>

    <!-- Form -->
    <div class="row">
      <div class="col-sm-6 col-12">
        <Input label="الإسم" bg="transparent" />
      </div>

      <div class="col-sm-6 col-12">
        <Input label="رقم الجوال" bg="transparent" />
      </div>

      <div class="col-sm-6 col-12">
        <Input label=" البريد الإلكتروني" type="email" bg="transparent" />
      </div>
    </div>
  </section>
</template>
