<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: { type: String, required: true },
  type: { type: String, default: 'primary' },
  isOutline: { type: Boolean, default: false },
  hoverAnimation: { type: Boolean, default: false },
  small: { type: Boolean, default: false }
})

const classObject = computed(() => ({
  'btn-outline-primary': props.isOutline && props.type === 'primary',
  'btn-outline-secondary': props.isOutline && props.type === 'secondary',
  'btn-canceled': props.type === 'canceled',
  'btn-hover': props.hoverAnimation,
  'btn-sm': props.small
}))
</script>

<template>
  <button :class="classObject" class="btn" v-text="label"></button>
</template>

<style scoped>
.btn {
  border-radius: 8px;
  min-width: 190px;
  height: 48px;
  position: relative;
  overflow: hidden;
  color: var(--white);
  background-color: var(--primary-base);
  border: 0;
  transition: all 1000ms cubic-bezier(0.19, 1, 0.22, 1);
}

.btn.btn-sm {
  height: 38px;
  width: fit-content;
  min-width: fit-content;
  padding: 0 1.5rem;
  border-radius: 6px;
}

.btn.btn-canceled {
  background: var(--primary-lighter);
  color: var(--primary-base);

  &:hover {
    background: rgba(23, 46, 61, 0.2);
    color: var(--primary-base);
    box-shadow: none;
  }
}

@media screen and (max-width: 992px) {
  .btn.btn-sm {
    width: 100%;
  }
}

.btn:hover {
  background-color: var(--primary-dark);
}

.btn.btn-outline-primary,
.btn-outline-secondary {
  border: 1px solid var(--primary-light) !important;
  color: var(--primary-base);
  background-color: transparent;
}

.btn.btn-outline-primary:hover {
  color: var(--white);
  background-color: var(--primary-base);
}

.btn-outline-secondary:hover {
  color: var(--white);
  background: var(--secondary-base);
  border-color: var(--secondary-base) !important;
}

.btn::before {
  background: var(--white);
  content: '';
  height: 155px;
  opacity: 0;
  position: absolute;
  top: -50px;
  transform: rotate(35deg);
  width: 50px;
  transition: all 2500ms cubic-bezier(0.19, 1, 0.22, 1);
}

.btn::after {
  background: var(--white);
  content: '';
  height: 20rem;
  opacity: 0;
  position: absolute;
  top: -50px;
  transform: rotate(35deg);
  transition: all 2500ms cubic-bezier(0.19, 1, 0.22, 1);
  width: 8rem;
}

.btn-hover::before {
  left: -50%;
}

.btn-hover::after {
  left: -100%;
}

.btn:hover {
  /* transform: translateY(-3px); */
  color: var(--white);
  box-shadow: 0 10px 20px 0 rgba(23, 46, 61, 0.2);
}

.btn.btn-sm:hover {
  box-shadow: none;
}

.btn-hover:hover::before {
  left: 120%;
  opacity: 0.5s;
}

.btn-hover:hover::after {
  left: 200%;
  opacity: 0.6;
}
</style>
