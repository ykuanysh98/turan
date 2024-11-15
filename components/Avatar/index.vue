<template>
  <v-menu min-width="200px" rounded>
    <template v-slot:activator="{ props }">
      <v-btn icon v-bind="props">
        <v-avatar color="brown" size="large">
          <span class="text-h5">{{ userData?.initials }}</span>
        </v-avatar>
      </v-btn>
    </template>
    <v-card>
      <v-card-text>
        <div class="mx-auto text-center">
          <v-avatar color="brown">
            <span class="text-h5">{{ userData?.initials }}</span>
          </v-avatar>
          <h3>{{ userData?.name }}</h3>
          <p class="text-caption mt-1">
            {{ userData?.email }}
          </p>
          <v-divider class="my-3"></v-divider>
          <v-btn variant="text" rounded>
            Edit Account
          </v-btn>
          <v-divider class="my-3"></v-divider>
          <v-btn variant="text" rounded>
            Disconnect
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script setup lang="ts">
const { users, fetchUsers } = useUser();
import { onMounted, computed } from 'vue';

const userData = computed(() => {
  return users.value.data?.[0];
});

onMounted(async () => {
  await fetchUsers();
});
</script>