<script setup>
import { computed } from 'vue'

const props = defineProps({
  data: { type: String, required: true },
  line: { type: Boolean, default: false },
  justify: { type: String, default: 'center' }
})

const classObject = computed(() => ({
  line: props.line
}))

const classJustify = computed(() => ({
  'justify-content-center': props.justify === 'center',
  'justify-content-start': props.justify === 'start'
}))
</script>

<template>
  <div :class="classJustify" class="d-flex pb-4 pt-5">
    <h1 :class="classObject" class="fs-3 fw-medium" v-text="data"></h1>
  </div>
</template>

<style style>
h1.line {
  position: relative;
}

h1.line::after {
  position: absolute;
  content: '';
  width: 50%;
  height: 1.5px;
  background-color: var(--secondary-base);
  bottom: -1rem;
  left: 50%;
  transform: translate(-50%, -50%);
}

.justify-content-start h1.line::after {
  right: 0;
  left: auto;
  transform: none;
}
</style>
