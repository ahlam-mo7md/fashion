<script setup>
import Button from '@/components/Button.vue'
import Input from '@/components/Input.vue'
import SmallTopic from '@/components/SmallTopic.vue'
import Modal from '@/components/Modal.vue'
import { ref } from 'vue'

const name = ref()
</script>

<template>
  <article>
    <!-- Topic -->
    <SmallTopic data="تفاصيل الطلب" />

    <!-- Order Items -->
    <div class="d-flex flex-column border-bottom pb-2 mb-3">
      <div v-for="item in 2" class="card mb-3 border-0 pb-2">
        <div class="row g-0">
          <div class="col-md-2 col-3 d-flex align-items-center">
            <img src="@/assets/images/product-1.png" class="img-fluid" alt="..." />
          </div>

          <div class="col-md-10 col-9 d-flex align-items-center">
            <div class="card-body">
              <div>
                <h5 class="card-title fs-6">بنطال جينز رجالي</h5>
                <p class="card-text fs-6 text_secondary mb-4">
                  <b class="text_secondary">29.99 </b>
                  ر.س
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Order Summery -->
    <div class="d-flex flex-column gap-4 pt-3">
      <div class="d-flex justify-content-between align-items-center">
        <span class="text-secondary fw-medium">مجموع الفرعي ( منتج 2 )</span>
        <span><span class="fw-medium">29.99 </span>ر.س</span>
      </div>

      <div class="d-flex justify-content-between align-items-center">
        <span class="text-secondary fw-medium"> رسوم التوصيل </span>
        <span> <span class="fw-medium">29.99 </span> ر.س </span>
      </div>

      <div class="d-flex justify-content-between align-items-center">
        <span class="text-secondary fw-medium"> خصم رسوم التوصيل </span>
        <span> <span class="fw-medium">29.99 </span> ر.س </span>
      </div>

      <div class="d-flex justify-content-between align-items-center">
        <span class="text-secondary fw-medium"> ضريبة القيمة المضافة </span>
        <span> <span class="fw-medium">29.99 </span> ر.س</span>
      </div>

      <div class="mt-4 d-flex justify-content-between align-items-center">
        <div class="d-flex flex-column">
          <span class="text-secondary fw-medium"> المجموع الكلي </span>
          <span class="text-secondary fs-7"> شامل ضريبة القيمة المضافة (%15) </span>
        </div>
        <span> <b>29.99 </b> ر.س </span>
      </div>
    </div>

    <!-- Payment Card Information Button -->
    <div class="mt-5">
      <Button
        label="أدخل بيانات الدفع"
        class="w-100"
        data-bs-toggle="modal"
        data-bs-target="#paymentCardInfo"
      />
    </div>

    <!-- Modal ( Payment Card Information ) -->
    <Modal id="paymentCardInfo" title="بيانات بطاقة الدفع">
      <template #body>
        <div class="d-flex flex-column gap-4">
          <div class="bg p-3 rounded-2 d-flex justify-content-around">
            <img class="img-fluid" src="@/assets/images/mada.svg" alt="" />
            <img class="img-fluid" src="@/assets/images/visa.svg" alt="" />
            <img class="img-fluid" src="@/assets/images/pay.svg" alt="" />
            <img class="img-fluid" src="@/assets/images/master.svg" alt="" />
          </div>

          <div>
            <Input v-model="name" placeholder="الإسم على البطاقة" :required="true" />

            <Input v-model="name" placeholder="رقم البطاقة " :required="true" />

            <div class="d-flex gap-3 flex-sm-row flex-column">
              <Input v-model="name" placeholder="التاريخ" :required="true" />
              <Input v-model="name" placeholder="الشيفرة " :required="true" />
            </div>
          </div>
        </div>
      </template>

      <template #footer>
        <div class="d-flex justify-content-between align-items-center w-100">
          <div class="d-flex flex-column">
            <span class="fs-7 text-secondary">المجموع الكلي</span>
            <span class="fs-5"><b>120.99 </b>ر.س</span>
          </div>

          <Button label=" دفع" />
        </div>
      </template>
    </Modal>
  </article>
</template>

<style scoped>
.bg {
  background-color: var(--primary-lighter);
}
</style>
