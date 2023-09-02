<script setup>
import { computed } from 'vue'
const randomInputID = Math.floor(Math.random() * 1e8 * Date.now())

const props = defineProps({
  modelValue: { required: true },
  label: { type: String, default: '' },
  placeholder: { type: String, default: '' },
  type: { type: String, default: 'text' },
  required: { type: String, default: false },
  groupText: { type: String, default: null },
  bg: { type: String, default: 'white' }
})

const classObject = computed(() => ({
  'bg-secondary-subtle': props.bg === 'secondary',
  'bg-transparent': props.bg === 'transparent'
}))

let emit = defineEmits(['update:modelValue'])
const updateValue = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<template>
  <div class="mb-3">
    <label v-if="label" :for="`input-${randomInputID}`" v-text="label" class="form-label"></label>

    <input
      v-if="!groupText"
      :value="modelValue"
      @input="updateValue"
      :id="`input-${randomInputID}`"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      :class="classObject"
      class="form-control"
    />

    <!-- input-group -->
    <div v-else class="input-group">
      <input
        :value="modelValue"
        @input="updateValue"
        :id="`input-${randomInputID}`"
        :type="type"
        :placeholder="placeholder"
        :required="required"
        class="form-control"
      />
      <span v-text="groupText" class="input-group-text fs-8" :id="`input-${randomInputID}`"></span>
    </div>
  </div>
</template>

<style scoped>
.form-control {
  border-radius: 6px;
  padding: 0.75rem 0.75rem;
}

.input-group .form-control {
  border-top-right-radius: 6px !important;
  border-bottom-right-radius: 6px !important;
}

.input-group .input-group-text {
  border-top-left-radius: 6px !important;
  border-bottom-left-radius: 6px !important;
}

.bg-secondary-subtle {
  background-color: var(--primary-lighter) !important;
}

.form-control:focus {
  border-color: var(--primary-light);
  outline: 0;
  box-shadow: none;
}
</style>
