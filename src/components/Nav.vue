<script setup>
import { computed } from 'vue'

const props = defineProps({
  dir: { type: String, default: 'row' }
})

const classObject = computed(() => ({
  'flex-column align-items-start gap-3': props.dir === 'column'
}))
</script>

<template>
  <nav :class="classObject" class="text-center d-flex">
    <RouterLink to="/">الرئيسية</RouterLink>
    <RouterLink to="/products">جميع المنتجات</RouterLink>
    <RouterLink to="/profile" class="d-sm-none d-flex">الملف الشخصي</RouterLink>
    <RouterLink to="/addresses" class="d-sm-none d-flex">العناوين</RouterLink>
    <RouterLink to="/orders" class="d-sm-none d-flex">الطلبات</RouterLink>
  </nav>
</template>

<style scoped>
nav a {
  display: inline-block;
  padding: 0 0.5rem;
  color: rgba(23, 46, 61, 0.5);
  font-size: 14x;
}

nav a:hover {
  color: var(--secondary-base);
}

nav a.router-link-exact-active {
  color: var(--secondary-base);
}
</style>
