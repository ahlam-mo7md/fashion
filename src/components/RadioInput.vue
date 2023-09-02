<script setup>
import { computed } from 'vue'

const randomInputID = Math.floor(Math.random() * 1e8 * Date.now())

const props = defineProps({
  modelValue: { required: true },
  label: { type: String },
  color: { type: String },
  type: { type: String, required: true },
  checked: { type: Boolean, default: false },
  name: { type: String, required: true }
})

const classObject = computed(() => ({
  'radio-color': props.type === 'color',
  'radio-btn': props.type === 'btn',
  'radio-card': props.type === 'card',
  'radio-card center': props.type === 'card-line'
}))

let emit = defineEmits(['update:modelValue'])
const updateValue = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<template>
  <div>
    <input
      :value="modelValue"
      @input="updateValue"
      type="radio"
      class="btn-check"
      :name="name"
      :id="`input-${randomInputID}`"
      autocomplete="off"
      :checked="checked"
    />

    <!-- Radio Input (type-card-cardLine) -->
    <label
      v-if="type === 'card' || type === 'card-line'"
      :class="classObject"
      :for="`input-${randomInputID}`"
    >
      <slot />

      <span class="check"></span>
    </label>

    <!-- Radio Input (type-color) -->
    <label
      v-else
      :class="classObject"
      v-text="type !== 'color' ? label : ''"
      :for="`input-${randomInputID}`"
      :style="`--color: ${color};`"
    ></label>
  </div>
</template>

<style scoped>
.radio-color {
  width: 18px;
  height: 18px;
  border-radius: 50px;
  background-color: var(--color);
  padding: 0;
  position: relative;
  z-index: 1;
  cursor: pointer;
}

.radio-btn {
  border: 1px solid rgba(23, 46, 61, 0.5);
  height: 32px;
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(23, 46, 61, 0.5);
  cursor: pointer;
}

.radio-card {
  width: 100%;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid var(--primary-light);
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  &.center {
    align-items: center;
  }

  .check {
    height: 20px;
    width: 20px;
    border: 1.5px solid var(--primary-light);
    border-radius: 50px;
  }
}

.btn-check:checked {
  + .radio-color::after {
    border: 1px solid var(--color);
    position: absolute;
    content: '';
    width: 25px;
    height: 25px;
    z-index: -1;
    border-radius: 50px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  + .radio-btn {
    background-color: var(--primary-base);
    color: white;
  }

  + .radio-card {
    border-color: 1px solid var(--primary-base);

    .check {
      border-color: var(--primary-base);
      position: relative;

      &::after {
        position: absolute;
        content: '';
        background-color: var(--primary-base);
        width: 12px;
        height: 12px;
        border-radius: 50px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
}
</style>
