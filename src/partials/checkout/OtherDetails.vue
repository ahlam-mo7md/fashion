<script setup>
import SmallTopic from '@/components/SmallTopic.vue'
</script>

<template>
  <article class="d-flex flex-column gap-4">
    <div>
      <SmallTopic data="التوصيل إلى:" />
      <div class="bg p-3 rounded-2">
        <span class="text-secondary"> السعودية , الرياض , مكة , مكة </span>
      </div>
    </div>

    <div>
      <SmallTopic data="التوصيل بواسطة:" />
      <div class="bg p-3 rounded-2 d-flex align-items-center gap-3">
        <img src="@/assets/images/aymakan.png" alt="" />
        <span class="text-secondary"> مدة تجهيز الطلب خلال يومين ومدة التوصيل خلال 4 أيام </span>
      </div>
    </div>

    <div>
      <SmallTopic data="ملاحظاتك:" />
      <div class="mb-3">
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          placeholder="اكتب ملاحظتك"
        ></textarea>
      </div>
    </div>
  </article>
</template>

<style scoped>
.bg {
  background-color: var(--primary-lighter);
}
</style>
