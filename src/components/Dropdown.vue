<script setup>
import ArrowBottom from '@/components/icons/ArrowBottom.vue'
import { ref } from 'vue'

const toggle = ref(false)
</script>

<template>
  <div class="position-relative">
    <!-- Dropdown Label -->
    <div
      :class="toggle ? 'toggle' : ''"
      @click="toggle = !toggle"
      class="dropdown d-flex justify-content-between gap-3 align-items-center"
    >
      <div class="d-flex align-items-center gap-2">
        <slot name="title" />
      </div>
      <ArrowBottom />
    </div>

    <!-- Dropdown Content -->
    <div
      :class="toggle ? 'toggle' : ''"
      class="dropdown_content bg-white w-100 position-absolute rounded-0 card"
    >
      <div class="card-body">
        <slot name="body" />
      </div>
    </div>
  </div>
  <div @click="toggle = !toggle" v-if="toggle" class="bg"></div>
</template>

<style scoped>
.dropdown {
  border: 1px solid rgba(23, 46, 61, 0.5);
  padding: 0.65rem 1rem;
  cursor: pointer;
  background: transparent;
  transition: all 0.4s ease-in-out;
  position: relative;
  z-index: 2;
}

.dropdown.toggle svg {
  transform: rotate(180deg);
}

.dropdown:hover {
  background: #f1f1f1;
}

.dropdown_content {
  border: 1px solid rgba(23, 46, 61, 0.5);
  border-top: 0;
  z-index: 99;
  visibility: hidden;
  opacity: 0;
  transform: translateY(-5%);
  transition: all 0.4s ease-in-out;
}

.dropdown_content.toggle {
  transform: translateY(0%);
  opacity: 1;
  visibility: visible;
}

.bg {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  top: 0;
  left: 0;
  z-index: 0;
}
</style>
