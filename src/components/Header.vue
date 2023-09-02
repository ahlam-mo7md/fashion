<script setup>
import SearchInput from '@/components/Search.vue'
import ProfileIcon from '@/components/icons/Profile.vue'
import CartIcon from '@/components/icons/Cart.vue'
import Menu from '@/components/Menu.vue'
import Nav from '@/components/Nav.vue'
</script>

<template>
  <header class="sticky-top header">
    <div class="container-lg h-100">
      <div class="row h-100">
        <div class="col-lg-1 col-md-2 col-sm-2 col-6 d-flex align-items-center gap-2">
          <Menu class="d-sm-none d-flex" />
          <img class="logo" src="@/assets/images/logo-light.png" alt="" />
        </div>

        <div class="col-lg-7 col-md-5 col-sm-4 d-sm-flex d-none align-items-center">
          <Nav />
        </div>

        <div
          class="col-lg-4 col-md-5 col-sm-6 col-6 d-flex justify-content-end gap-3 align-items-center h-100"
        >
          <div class="d-sm-flex d-none">
            <SearchInput />
          </div>

          <RouterLink to="/account-settings">
            <ProfileIcon />
          </RouterLink>

          <RouterLink to="/cart" class="h-100">
            <div class="cart">
              <CartIcon class="z-2" />
              <span>1</span>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(40px);
  box-shadow: 1px 1px 19px 0px rgb(0 0 0 / 4%);
  height: 86px;
}

.logo {
  width: 100%;
}

.cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 2px;
  padding: 0.7rem 1rem;
  z-index: 2;
  height: 100%;
  background: rgba(183, 126, 32, 0.99);
  overflow: hidden;
}

.cart > span {
  color: white;
  z-index: 2;
  font-size: 12px;
}

.cart::before {
  position: absolute;
  content: '';
  background-color: transparent;
  width: 100%;
  border: 27px solid;
  border-color: transparent transparent white transparent;
  bottom: 0;
  z-index: 3;
}

@media screen and (max-width: 576px) {
  .header {
    height: 76px;
  }

  .logo {
    width: 36% !important;
  }

  .cart {
    padding: 0.75rem;
  }

  .cart::before {
    border: 27px solid;
    bottom: -6px !important;
    border-color: transparent transparent white transparent;
  }
}

@media screen and (max-width: 992px) {
  .logo {
    width: 70%;
  }
}

@media screen and (max-width: 410px) {
  .logo {
    width: 44% !important;
  }
}
</style>
