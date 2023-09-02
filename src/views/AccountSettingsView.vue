<script setup>
import Topic from '@/components/Topic.vue'
import UserIcon from '@/components/icons/User.vue'
import AddressIcon from '@/components/icons/Address.vue'
import OrdersIcon from '@/components/icons/Orders.vue'
import UserDeleteIcon from '@/components/icons/UserDelete.vue'
</script>

<template>
  <main class="container-lg pb-5">
    <!-- Topic -->
    <div>
      <Topic data="إعدادات الحساب" justify="start" class="pb-0" />
      <p class="text-secondary mt-1">يمكنك تغيير بياناتك الشخصية والإطلاع على طلباتك</p>
    </div>

    <div class="card border-0 mt-4">
      <div class="row">
        <!-- Nav Tabs -->
        <div class="col-lg-3 col-md-4 d-md-flex d-none navs-tabs border-end p-5">
          <nav class="d-flex flex-column gap-4">
            <!-- Tap Item -->
            <RouterLink to="/profile">
              <div class="nav-link d-flex align-items-center gap-2">
                <UserIcon />
                <span>الملف الشخصي</span>
              </div>
            </RouterLink>

            <!-- Tap Item -->
            <RouterLink to="/addresses">
              <div class="nav-link d-flex align-items-center gap-2">
                <AddressIcon />
                <span>العناوين </span>
              </div>
            </RouterLink>

            <!-- Tap Item -->
            <RouterLink to="/orders">
              <div class="nav-link d-flex align-items-center gap-2">
                <OrdersIcon />
                <span>الطلبات </span>
              </div>
            </RouterLink>

            <!-- Tap Item -->
            <a class="nav-link d-flex align-items-center gap-2">
              <UserDeleteIcon />
              <span style="color: #f65a6c">حذف الحساب </span>
            </a>
          </nav>
        </div>

        <!-- Nav Tabs Content -->
        <div class="col-lg-9 col-md-8 p-lg-5 p-4">
          <RouterView />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.pb-0 {
  padding-bottom: 0 !important;
}

.card {
  background: #f8f8f8;
  min-height: 500px;
}

.card .navs-tabs {
  min-height: 500px;
}
</style>
