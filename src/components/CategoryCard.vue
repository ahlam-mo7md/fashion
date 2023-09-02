<script setup>
const props = defineProps({
  img: { type: String, required: true },
  name: { type: String, required: true }
})
</script>

<template>
  <figure class="card w-100 h-240">
    <!-- gategory-image -->
    <img class="category_img" :src="`../../src/assets/images/${img}`" :alt="name" />

    <!-- gategory-name -->
    <div class="category_name">
      <h1>
        {{ name }}
      </h1>
    </div>
  </figure>
</template>

<style scoped>
.card {
  position: relative;
  overflow: hidden;
  margin: 0;

  > .category_img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1);
    transition: all 0.4s ease-in-out;
  }

  > .category_name {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -30%);
    z-index: 2;
    transition: all 0.4s ease-in-out;

    > h1 {
      color: #fff;
      font-size: 24px;
      position: relative;
      text-align: center;

      &::after {
        position: absolute;
        content: '';
        width: 0%;
        height: 1px;
        background-color: #fff;
        transform: translateX(-50%);
        left: 50%;
        top: -0.5rem;
        transition: all 0.4s ease-in-out;
      }
    }
  }

  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.47);
    left: 0;
    top: 0;
    z-index: 1;
  }

  &:hover {
    > .category_name {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      > h1 {
        &::after {
          width: 60%;
        }
      }
    }

    > .category_img {
      transform: scale(1.1);
    }
  }
}
</style>
