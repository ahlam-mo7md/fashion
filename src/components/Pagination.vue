<template>
  <nav class="d-flex py-4 justify-content-center gap-2 align-items-center">
    <span class="item"> 4 </span>
    <span class="item"> 3 </span>
    <span class="item"> 2 </span>
    <span class="item active"> 1 </span>
  </nav>
</template>

<style scoped>
.item {
  background: var(--primary-base);
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  border: 1px solid var(--primary-base);
  transition: all 0.4s ease-in-out;
}

.item:hover {
  border: 1px solid var(--primary-base);
  background: white;
  color: var(--primary-base);
}

.item.active {
  border: 1px solid var(--primary-base);
  background: white;
  color: var(--primary-base);
}

.item.active:hover {
  background: var(--primary-base);
  color: white;
}
</style>
