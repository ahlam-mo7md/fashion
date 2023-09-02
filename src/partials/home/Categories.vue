<script setup>
import Topic from '@/components/Topic.vue'
import CategoryCard from '@/components/CategoryCard.vue'
</script>

<template>
  <section>
    <!-- Section Topic -->
    <Topic :data="'التصنيفات'" />

    <!-- Section Content -->
    <div class="row">
      <div class="col-md-5 d-flex flex-md-column flex-sm-row flex-column gap-3 mb-3">
        <!-- Category Card -->
        <CategoryCard class="h-240" img="category-1.png" name="جينز رجالي" />

        <!-- Category Card -->
        <CategoryCard class="h-460" img="category-2.png" name="تيشيرتات" />
      </div>

      <div class="col-md-7 d-flex flex-column gap-3">
        <!-- Category Card -->
        <CategoryCard class="h-450" img="category-3.png" name="قمصان رجالي" />

        <div class="d-flex gap-3 flex-sm-row flex-column">
          <!-- Category Card -->
          <CategoryCard class="h-250" img="category-4.png" name="قمصان رجالي" />

          <!-- Category Card -->
          <CategoryCard class="h-250" img="category-5.png" name="قمصان رجالي" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.h-240 {
  height: 240px;
}

.h-460 {
  height: 460px;
}

.h-450 {
  height: 450px;
}

.h-250 {
  height: 250px;
}

@media screen and (max-width: 992px) {
  .h-240,
  .h-460,
  .h-450,
  .h-250 {
    height: 250px;
  }
}
</style>
