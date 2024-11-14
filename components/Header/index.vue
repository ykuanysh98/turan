<template>
  <div class="bg-gray-100">
    <v-container>
      <v-toolbar>
        <v-row class="flex-center gap-3">
          <NuxtLink to="/" class="nav-link">
            <img class="max-w-md" src="https://placehold.co/110x50/png" alt="logo" />
          </NuxtLink>
          <v-toolbar-title>Title</v-toolbar-title>
          <v-row class="flex-center gap-3 mobile-not">
            <NuxtLink to="/" class="nav-link">Басты бет</NuxtLink>
            <div class="nav-link">
              <Menu :items="items">Товарлар </Menu>
            </div>
            <NuxtLink to="/blog/2" class="nav-link">Біз туралы</NuxtLink>
          </v-row>
        </v-row>
        <v-spacer></v-spacer>
        <Search v-model="query" placeholder="Іздеңіз..." class="mobile-not" />
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat>Sugn Up</v-btn>
          <v-btn flat>Sign In</v-btn>
        </v-toolbar-items>
        <BurgerMenu class="mobile-only" />
        <Avatar class="mobile-not" />
      </v-toolbar>

    </v-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const query = ref('')
const items = ref<string[]>([
  {
    id: 1,
    title: 'Категория 1',
  },
  {
    id: 2,
    title: 'Категория 2',
    children: [
      {
        id: 21,
        title: 'Категория 21',
      },
      {
        id: 22,
        title: 'Категория 22',
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
          },
          {
            id: 312,
            title: 'Категория 312',
          },
          {
            id: 312,
            title: 'Категория 312',
          },
        ]
      },
    ]
  },
])
</script>

<style>
.nav-link {
  position: relative;
}

.v-toolbar {
  background-color: transparent;
}

.v-toolbar__content {
  overflow: inherit;
}
</style>