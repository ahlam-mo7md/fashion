<script setup>
import Button from '@/components/Button.vue'
</script>

<template>
  <section>
    <h1 class="fs-5 mb-5">طلباتك</h1>

    <div v-for="item in 3" class="card bg-transparent mb-3 border-0 border-bottom pb-2">
      <div class="row g-0">
        <span class="fs-7 text-secondary d-inline d-md-none mb-sm-3">October 31, 2017</span>

        <div class="col-sm-2 col-4 d-flex align-items-center">
          <img src="@/assets/images/product-1.png" class="img-fluid" alt="..." />
        </div>

        <div class="col-sm-10 col-8 d-flex align-items-center">
          <div class="card-body">
            <div class="d-flex justify-content-between h-100">
              <div>
                <h5 class="card-title fs-6">بنطال جينز رجالي</h5>
                <p class="card-text fs-6 text_secondary mb-sm-4 mb-0">
                  <b class="text_secondary">29.99 </b>
                  ر.س
                </p>
                <span class="d-flex gap-2">
                  <span>X</span>
                  <span>2</span>
                </span>
              </div>

              <div class="d-flex flex-column justify-content-between align-items-end">
                <span class="fs-7 text-secondary d-md-inline d-none">October 31, 2017</span>
                <Button
                  label="إطلب مرة أُخرى"
                  :small="true"
                  :hoverAnimation="true"
                  class="d-sm-block d-none"
                />
              </div>
            </div>

            <Button
              label="إطلب مرة أُخرى"
              :small="true"
              :hoverAnimation="true"
              class="d-block d-sm-none mt-2"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
