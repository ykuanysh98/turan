<template>
  <div class="sticky top-0 z-50 bg-white shadow-lg h-[80px]">
    <v-container class="flex-between gap-10 h-full">
      <NuxtLink to="/">
        <img class="max-w-md" src="/images/Logo.svg" alt="logo" />
      </NuxtLink>

      <div class="flex-between gap-8 mobile-not">
        <NuxtLink to="/" class="nav-link">Конструктор</NuxtLink>
        <NuxtLink to="/catalog" class="nav-link">Каталог</NuxtLink>
        <NuxtLink to="/" class="nav-link">Оставить заявку</NuxtLink>
      </div>

      <MoleculeSearch v-model="query" class="mobile-not w-full max-w-[400px]" />

      <div class="flex-between gap-4">
        <MoleculeSearchMobile v-model="query" class="mobile-only" />
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
        <BaseButton
          class="mobile-not"
          v-else
          @click="$router.push('/auth/login')"
        >
          Войти
        </BaseButton>
        <OrganismBurgerMenu class="mobile-only" />
      </div>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from "~/composables/useAuth";
const { getAuth } = useAuth();
import { useRoute } from "vue-router";

const route = useRoute();

import { ref } from "vue";

const query = ref("");
</script>

<style lang="scss" scoped>
.nav-link {
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: #535862;
}
</style>
