<script setup>
import PlusIcon from '@/components/icons/Plus.vue'
import MinusIcon from '@/components/icons/Minus.vue'
import { ref } from 'vue'

const quantity = ref(1)
</script>

<template>
  <div class="d-flex align-items-center gap-3">
    <span class="quantity-icon" @click="quantity++">
      <PlusIcon />
    </span>

    <span>{{ quantity }}</span>

    <span class="quantity-icon" @click="quantity <= 1 ? quantity : quantity--">
      <MinusIcon :class="quantity === 1 ? 'opacity-50' : 'opacity-100'" />
    </span>
  </div>
</template>

<style scoped>
.quantity-icon {
  cursor: pointer;
}
</style>
