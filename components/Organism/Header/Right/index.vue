<template>
  <AtomIcon
    icon="basket"
    :variant="route.path === '/basket' ? 'primary' : 'secondary'"
    @click="$router.push('/basket')"
  />
  <AtomIcon
    v-if="getAuth()"
    class="mobile-not"
    icon="user"
    :variant="route.path === '/profile' ? 'primary' : 'secondary'"
    @click="$router.push('/profile')"
  />
  <BaseButton class="mobile-not" v-else @click="$router.push('/auth/login')">
    Войти
  </BaseButton>
</template>

<script setup lang="ts">
import { useAuth } from "~/composables/useAuth";
const { getAuth } = useAuth();

import { useRoute } from "vue-router";
const route = useRoute();
</script>
