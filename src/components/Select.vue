<script setup>
const randomInputID = Math.floor(Math.random() * 1e8 * Date.now())

const props = defineProps({
  modelValue: { required: true },
  label: { type: String },
  options: { type: Array }
})

let emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<template>
  <select
    :id="`select-${randomInputID}`"
    @change="updateValue"
    class="form-select w-auto"
    aria-label="Default select example"
  >
    <template v-for="option in options" :key="option.id">
      <option :value="option.id" :selected="modelValue === option.id">
        {{ option.name }}
      </option>
    </template>
  </select>
</template>

<style scoped>
.form-select {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.form-select:focus {
  border-color: var(--primary-light);
  outline: 0;
  box-shadow: none;
}
</style>
