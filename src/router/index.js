import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('@/views/ProductsView.vue')
    },
    {
      path: '/products/:id',
      name: 'product',
      component: () => import('@/views/ProductDetailsView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/CartView.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('@/views/CheckoutView.vue')
    },
    {
      path: '/checkout/confirmation',
      name: 'checkout-confirmation',
      component: () => import('@/views/ConfirmationView.vue')
    },
    {
      path: '/add-address',
      name: 'add-address',
      component: () => import('@/views/AddAddressView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/otp',
      name: 'otp',
      component: () => import('@/views/OtpView.vue')
    },
    {
      path: '/account-settings',
      name: 'account-settings',
      redirect: '/profile',
      component: () => import('@/views/AccountSettingsView.vue'),
      children: [
        {
          path: '/profile',
          name: 'profile',
          component: () => import('@/views/ProfilePersonly.vue')
        },
        {
          path: '/orders',
          name: 'orders',
          component: () => import('@/views/Orders.vue')
        },
        {
          path: '/addresses',
          name: 'addresses',
          component: () => import('@/views/Addresses.vue')
        },
        {
          path: '/addresses/add-address',
          name: 'add-address',
          component: () => import('@/views/AddAddress.vue')
        }
      ]
    }
  ],

  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
