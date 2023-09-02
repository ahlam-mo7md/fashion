<script setup>
import MenuIcon from '@/components/icons/Menu.vue'
import Nav from '@/components/Nav.vue'
import Search from '@/components/Search.vue'
import { ref } from 'vue'

const toggle = ref(false)
</script>

<template>
  <div>
    <!-- Menu Icon -->
    <MenuIcon @click="toggle = !toggle" />

    <!-- Menu Content -->
    <div :class="toggle ? 'active' : ''" class="menu">
      <Search :full="true" />
      <div class="w-100 bg-secondary-subtle my-4 opacity-50" style="height: 1px"></div>
      <Nav @click="toggle = !toggle" dir="column" />
    </div>
  </div>
</template>

<style scoped>
.menu {
  position: absolute;
  top: 70px;
  width: 98%;
  margin: auto;
  background: rgba(255, 255, 255, 1);
  box-shadow: 1px 1px 19px 0px rgb(0 0 0 / 4%);
  border-radius: 10px;
  padding: 2rem;
  transform: translateX(-50%) translateY(0%);
  left: 50%;
  height: 0vh;
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s ease-in-out;
}

.menu.active {
  height: 88vh;
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(2%);
}
</style>
