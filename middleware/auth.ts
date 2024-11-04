import { defineNuxtRouteMiddleware } from 'nuxt/app';

export default defineNuxtRouteMiddleware((to, from) => {
  const userAuthenticated = false; // Мұнда шынайы аутентификация логикасы болады

  if (!userAuthenticated && to.path !== '/login') {
    // Пайдаланушы аутентификацияланбаған болса, оны /login бетіне бағыттау
    // return navigateTo('/login');
  }
});
