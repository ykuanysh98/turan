<template>
  <div class="sticky top-0 z-50 bg-white shadow-lg h-[80px]">
    <v-container class="flex-between gap-10 h-full">

      <NuxtLink to="/">
        <img class="max-w-md" src="/images/Logo.svg" alt="logo" />
      </NuxtLink>

      <div class="flex-between gap-8 mobile-not">
        <NuxtLink to="/" class="nav-link">Конструктор</NuxtLink>
        <NuxtLink to="/" class="nav-link">Каталог</NuxtLink>
        <NuxtLink to="/" class="nav-link">Оставить заявку</NuxtLink>
      </div>

      <MoleculeSearch v-model="query" class="w-full max-w-[400px] mobile-not" />

      <div class="flex-between gap-4 mobile-not">
        <v-icon @click="$router.push('/basket')">mdi-cart-outline</v-icon>
        <v-avatar v-if="isAuthenticated" @click="$router.push('/profile')">
          <v-icon icon="mdi-account-circle" size="30"></v-icon>
        </v-avatar>
        <BaseButton v-else @click="$router.push('/auth')">Войти</BaseButton>
      </div>
      <BurgerMenu class="mobile-only" />
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from '~/composables/useAuth'
const { isAuthenticated, checkAuth } = useAuth()

import { ref, onMounted } from 'vue'

type TreeNode = {
  id: number;
  title: string;
  path?: string;
  children?: TreeNode[];
};

const query = ref('')

const items: TreeNode[] = [
  {
    id: 1,
    title: 'Категория 1',
    path: '/qwwewe',
    children: []
  },
  {
    id: 2,
    title: 'Категория 2',
    path: '/qwwewe2',
    children: [
      {
        id: 21,
        title: 'Категория 21',
        children: []
      },
      {
        id: 22,
        title: 'Категория 22',
        children: []
      },
    ]
  },
  {
    id: 3,
    title: 'Категория 3',
    children: [
      {
        id: 31,
        title: 'Категория 31',
        children: [
          {
            id: 311,
            title: 'Категория 331',
            children: []
          },
          {
            id: 312,
            title: 'Категория 312',
            children: []
          },
          {
            id: 312,
            title: 'Категория 312',
            children: []
          },
        ]
      },
    ]
  },
]

onMounted(async () => {
  checkAuth();
});
</script>

<style lang="scss" scoped>
.nav-link {
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: #535862;
}
</style>