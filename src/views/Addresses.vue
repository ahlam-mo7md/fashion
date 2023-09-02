<script setup>
import Button from '@/components/Button.vue'
import DeleteIcon from '@/components/icons/Delete.vue'
</script>

<template>
  <section>
    <div class="mb-5 d-flex w-100 justify-content-between align-items-center setting">
      <h1 class="fs-5">عناوينك المسجّلة</h1>

      <RouterLink to="/addresses/add-address">
        <Button label="أضف عنوان" :small="true" />
      </RouterLink>
    </div>

    <div class="row">
      <div v-for="address in 6" class="col-md-6 mb-3">
        <div class="card bg-transparent">
          <div class="card-bod d-flex justify-content-between p-3">
            <div class="d-flex gap-3">
              <div class="d-flex flex-column gap-1">
                <span class="text-secondary">الدولة:</span>
                <span class="text-secondary">المدينة:</span>
                <span class="text-secondary">الحي:</span>
                <span class="text-secondary">الشارع:</span>
              </div>

              <div class="d-flex flex-column gap-1">
                <span>السعودية</span>
                <span>الرياض</span>
                <span>مكة</span>
                <span>مكة</span>
              </div>
            </div>
            <DeleteIcon />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card {
  border: 1px solid rgba(23, 46, 61, 0.75);
  border-radius: 10px;
}
</style>
