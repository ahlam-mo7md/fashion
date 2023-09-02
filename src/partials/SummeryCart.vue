<script setup>
import Button from '@/components/Button.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="card border-0">
    <div class="card-body py-4">
      <h1 class="fs-5 fw-medium mb-4">ملخص الطلب</h1>

      <div class="d-flex justify-content-between align-items-center mb-4">
        <span class="text-secondary"> المجموع الفرعي ( منتج 1 ) </span>

        <span class="text-secondary">
          <span class="fw-medium">29.99 </span>
          ر.س
        </span>
      </div>

      <div class="d-flex justify-content-between align-items-center border-bottom pb-5 mb-5">
        <span class="text-secondary"> ضريبة القيمة المضافة </span>

        <span class="text-secondary">
          <span class="fw-medium">29.99 </span>
          ر.س
        </span>
      </div>

      <div class="d-flex justify-content-between align-items-center">
        <span class="text-secondary"> المجموع الكلِّي </span>

        <span class="text-secondary">
          <span class="fw-medium">29.99 </span>
          ر.س
        </span>
      </div>

      <div class="d-flex flex-column gap-2 mt-5">
        <div class="input d-flex align-items-center gap-2">
          <input type="text" placeholder="أدخل كود الخصم إن وجد" />
          <button>إرسال</button>
        </div>
        <RouterLink to="/checkout">
          <Button label="متابعة الشراء" class="w-100" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: #f1f1f1;
}

.border-bottom {
  border-color: rgba(23, 46, 61, 0.25) !important;
}

.input {
  border: 1px solid rgba(23, 46, 61, 0.5);
  height: 48px;
  border-radius: 10px;
}

.input input {
  width: 100%;
  height: 100%;
  border: 0;
  background-color: transparent;
  padding-inline-start: 1rem;
}

.input input:focus {
  outline: 0;
}

.input button {
  border: 0;
  padding: 0 1rem;
}
</style>
