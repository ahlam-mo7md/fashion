<script setup>
import Topic from '@/components/Topic.vue'
import Button from '@/components/Button.vue'
import Select from '@/components/Select.vue'
import RadioInput from '@/components/RadioInput.vue'
import { ref } from 'vue'

const color = ref(null)
const size = ref(null)
const select = ref(null)
</script>

<template>
  <section class="d-flex flex-column gap-lg-5 gap-3">
    <article>
      <!-- name -->
      <Topic data="بنطلون - بيج سيلكون" justify="start" class="pb-2" />

      <!-- desc -->
      <p class="text-secondary m-0">يأتي البنطالون بتصميم أنيق وعصري يتماشى مع أحدث صيحات الموضة</p>
    </article>

    <!-- price -->
    <article>
      <p class="text_secondary fs-4 m-0">
        <b class="text_secondary">29.99</b>
        ر.س
      </p>
    </article>

    <!-- colors -->
    <article>
      <span class="text-secondary"> اللون: </span>

      <fieldset class="d-flex gap-3 mt-3 flex-wrap">
        <RadioInput v-model="color" type="color" color="#172E3D" name="color" />
        <RadioInput v-model="color" type="color" color="#9A0B0B" name="color" />
        <RadioInput v-model="color" type="color" color="#B77E20FC" name="color" />
      </fieldset>
    </article>

    <!-- Size -->
    <article>
      <span class="text-secondary"> المقاس: </span>

      <fieldset class="d-flex gap-4 mt-3 flex-wrap">
        <RadioInput v-model="size" type="btn" label="XS" name="size" />
        <RadioInput v-model="size" type="btn" label="S" name="size" />
        <RadioInput v-model="size" type="btn" label="M" name="size" />
        <RadioInput v-model="size" type="btn" label="L" name="size" />
        <RadioInput v-model="size" type="btn" label="XL" name="size" />
        <RadioInput v-model="size" type="btn" label="XXL" name="size" />
        <RadioInput v-model="size" type="btn" label="XXXL" name="size" />
      </fieldset>
    </article>

    <!-- Add To Cart -->
    <article>
      <div class="d-flex gap-2">
        <Button label="أضف إلى السلة" class="w-100" />
        <Select
          v-model="select"
          :options="[
            { id: '1', name: '1' },
            { id: '2', name: '2' },
            { id: '3', name: '3' }
          ]"
        ></Select>
      </div>
    </article>
  </section>
</template>

<style scoped>
.pb-2 {
  padding-bottom: 0.75rem !important;
  padding-top: 0 !important;
}
</style>
