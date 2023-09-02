<script setup>
import Quantity from '@/components/Quantity.vue'
import CancelIcon from '@/components/icons/Cancel.vue'
</script>

<template>
  <div class="card mb-3 border-0 border-bottom pb-2">
    <div class="row g-0">
      <!-- Item Image -->
      <div class="col-md-2 col-3 d-flex align-items-center">
        <img src="@/assets/images/product-1.png" class="img-fluid" alt="..." />
      </div>

      <div class="col-md-10 col-9 d-flex align-items-center">
        <div class="card-body d-flex justify-content-between">
          <div>
            <!-- name -->
            <h5 class="card-title fs-6">بنطال جينز رجالي</h5>
            <!-- price -->
            <p class="card-text fs-6 text_secondary mb-4">
              <b class="text_secondary">29.99 </b>
              ر.س
            </p>

            <Quantity />
          </div>

          <div>
            <CancelIcon />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
