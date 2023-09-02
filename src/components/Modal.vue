<script setup>
defineProps({
  id: { type: String },
  title: { type: String }
})
</script>

<template>
  <div
    class="modal fade"
    :id="id"
    tabindex="-1"
    :aria-labelledby="`${id}-Label`"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <!-- Modal Title -->
          <h1 class="modal-title fs-5" :id="`${id}-Label`">
            {{ title }}
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <!-- Modal Body -->
        <div class="modal-body">
          <slot name="body" />
        </div>
        <!-- Modal Footer -->
        <div class="modal-footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </div>
</template>
