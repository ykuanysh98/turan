<template>
  <v-toolbar class="p-2">
    <v-row class="flex-center gap-3">
      <img src="https://placehold.co/110x50/png" alt="logo" />
      <v-toolbar-title>Title</v-toolbar-title>
      <v-row class="flex-center gap-3 mobile-not">
        <NuxtLink to="/" class="nav-link">Басты бет</NuxtLink>
        <NuxtLink to="/blog" class="nav-link">Товарлар</NuxtLink>
        <NuxtLink to="/blog/2" class="nav-link">Товар</NuxtLink>
        <NuxtLink to="/about" class="nav-link">Біз туралы</NuxtLink>
      </v-row>
    </v-row>{{ query }}
    <v-spacer></v-spacer>
    <SearchInput v-model="query" placeholder="Іздеңіз..." />
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Sugn Up</v-btn>
      <v-btn flat>Sign In</v-btn>
    </v-toolbar-items>
    <BurgerMenu class="mobile-only" />
    <Avatar />
  </v-toolbar>
</template>

<script setup>
import { ref } from 'vue'

const query = ref('')
</script>

<style>
.v-toolbar__content {
  overflow: inherit;
}
</style>