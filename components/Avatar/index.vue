<template>
  <div class="avatar-container">
    <!-- Avatar image with dropdown menu -->
    <v-menu v-model:activator="menu" offset-y>
      <template v-slot:activator="{ on, props }">
        <v-btn icon v-bind="props" v-on="on">
          <v-avatar size="40">
            <img src="https://placehold.co/80x80/png" alt="User Avatar" />
          </v-avatar>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(item, index) in menuItems" :key="index">
          <NuxtLink :to="item.link">
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </NuxtLink>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Avatar menu open state
const menu = ref(false);

// Menu items for the dropdown
const menuItems = [
  { title: 'Profile', link: '/profile' },
  { title: 'Settings', link: '/settings' },
  { title: 'Logout', link: '/logout' }
];
</script>

<style scoped>
.avatar-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.v-avatar img {
  object-fit: cover;
  border-radius: 50%;
}
</style>
