<script setup>
import Button from '@/components/Button.vue'
import Input from '@/components/Input.vue'
</script>

<template>
  <section>
    <div class="mb-5 d-flex w-100 justify-content-between align-items-center setting">
      <h1 class="fs-5">أضف عنوان</h1>

      <Button label="حفظ " :small="true" />
    </div>

    <!-- Form -->
    <div class="row">
      <div class="col-sm-6">
        <Input label="الدولة" bg="transparent" />
      </div>

      <div class="col-sm-6">
        <Input label="المدينة" bg="transparent" />
      </div>

      <div class="col-sm-6">
        <Input label="الحي " bg="transparent" />
      </div>

      <div class="col-sm-6">
        <Input label=" الشارع " bg="transparent" />
      </div>
    </div>
  </section>
</template>
