<script setup>
import RightIcon from '@/components/icons/Right.vue'

const props = defineProps({
  step: { type: Object, required: true }
})
</script>

<template>
  <!-- Wizard Step -->
  <div :class="step.state" class="d-flex flex-column gap-1 step">
    <div class="d-flex align-items-center gap-2">
      <span class="step_circle">
        <span class="step_num">
          {{ step.num }}
        </span>
        <span class="step_icon">
          <RightIcon />
        </span>
      </span>
      <div class="step_line"></div>
    </div>
    <span class="step_label fs-6">
      {{ step.title }}
    </span>
  </div>
</template>

<style scoped>
.step {
  .step_circle {
    width: 38px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1.5px solid rgba(23, 46, 61, 0.4);
    border-radius: 50px;
    background-color: transparent;
    color: rgba(23, 46, 61, 0.4);

    .step_icon {
      display: none;
    }
  }

  .step_line {
    width: 300px;
    border: 1px dashed rgba(23, 46, 61, 0.4);
    border-radius: 2px;
  }

  .step_label,
  .step_num {
    color: rgba(23, 46, 61, 0.4);
  }

  &.active {
    .step_circle {
      border-color: var(--primary-base);
      color: var(--primary-base);
    }

    .step_label,
    .step_num {
      color: var(--primary-base);
    }
  }

  &.completed {
    .step_label {
      color: var(--primary-base);
    }

    .step_circle {
      border-color: var(--primary-base);
      background-color: var(--primary-base);
      color: white;

      .step_icon {
        display: block;
      }

      .step_num {
        display: none;
      }
    }

    .step_line {
      border-color: var(--primary-base);
    }
  }

  &:last-child {
    .step_line {
      display: none;
    }
  }

  @media screen and (max-width: 992px) {
    justify-content: start;
    align-items: start;

    .step_circle {
      width: 38px;
      height: 38px;
    }
  }

  @media screen and (max-width: 600px) {
    .step_line {
      width: 200px;
    }
  }

  @media screen and (max-width: 400px) {
    .step_line {
      width: 180px;
    }

    .step_label {
      font-size: 14px !important;
    }
  }
}
</style>
