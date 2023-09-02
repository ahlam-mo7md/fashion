<script setup>
import Input from '@/components/Input.vue'
import SearchIcon from '@/components/icons/Search.vue'
import { ref } from 'vue'

const props = defineProps({
  full: { type: Boolean, default: false }
})

const searchValue = ref()
const searchActive = ref(false)
</script>

<template>
  <!-- Search Full Input -->
  <form v-if="full" class="search active">
    <SearchIcon />
    <input v-model="searchValue" placeholder="بحث" bg="transparent" type="search" />
  </form>

  <!-- Search Just Icon -->
  <form v-else :class="searchActive ? 'active' : ''" class="search">
    <SearchIcon @click="searchActive = !searchActive" />
    <input v-model="searchValue" placeholder="بحث" bg="transparent" type="search" />
    <div @click="searchActive = !searchActive" v-if="searchActive" class="bg"></div>
  </form>
</template>

<style scoped>
.search {
  display: flex;
  border-radius: 10px;
  transition: all 0.4s ease-out;
  cursor: pointer;
}

.search > input {
  border: 0;
  background-color: transparent;
  display: none;
  transition: all 0.4s ease-out;
  position: relative;
  z-index: 2;
  width: 100%;
}

.search > input:focus {
  outline: 0;
  outline: 0;
  box-shadow: none;
}

.search.active {
  padding: 0.25rem 1rem;
  border: 1px solid rgba(23, 46, 61, 0.3);
}

.search.active > input {
  display: inline;
}

.search .bg {
  position: absolute;
  height: 100vh;
  width: 100vh;
  background: transparent;
  top: 0;
  left: 0;
  z-index: 0;
}
</style>
