<template>
  <v-menu min-width="200px" rounded>

    <template v-slot:activator="{ props }">
      <v-btn v-if="isAuthenticated" icon v-bind="props">
        <v-avatar color="brown" size="large">
          <span class="text-h5">{{ user?.name?.slice(0, 1) }}</span>
        </v-avatar>
      </v-btn>

      <AtomAuthModal v-else>
        <v-avatar color="brown" size="large">
          <v-icon icon="mdi-account-circle"></v-icon>
        </v-avatar>
      </AtomAuthModal>
    </template>

    <v-card v-if="isAuthenticated">
      <v-card-text>
        <div class="mx-auto text-center">
          <v-avatar color="brown">
            <span class="text-h5">{{ user?.name }}</span>
          </v-avatar>
          <h3>{{ user?.name }}</h3>
          <p class="text-caption mt-1">
            {{ user?.email }}
          </p>
          <v-divider class="my-3"></v-divider>
          <v-btn @click="handleLogout" variant="text" rounded>
            Шығу
          </v-btn>
        </div>
      </v-card-text>
    </v-card>

  </v-menu>
</template>

<script setup lang="ts">
import { useAuth } from '~/composables/useAuth'
const { logout, user, isAuthenticated } = useAuth()

const handleLogout = () => {
  logout()
}
</script>