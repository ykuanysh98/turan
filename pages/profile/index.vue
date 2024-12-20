<template>
  <div class="profile">
    <div class="profile__wrap">
      <AtomTitle title="Профиль" size="xs" block />
      <MoleculeTabs v-model="tab" class="mb-2" />

      <MoleculeProfileEdit v-if="tab === 1" />

      <MoleculeOrders v-if="tab === 2" />
    </div>

    <BaseButton variant="secondary" size="xs" @click="logoutProfile">
      <v-icon color="red" icon="mdi-logout" start> </v-icon>
      Выйти
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from '~/composables/useAuth'
const { logout, user } = useAuth()
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// Router объектісін алу
const router = useRouter();

const definePageMeta = (meta: { layout: string, middleware: string }) => meta
definePageMeta({
  layout: 'default',
  middleware: 'auth',
})

const tab = ref<any>('null')

const logoutProfile = function () {
  logout();
  router.push('/')
}
</script>

<style lang="scss" scoped>
.profile {
  padding: 48px 0 96px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 40px;

  &__wrap {
    width: 640px;
    display: flex;
    flex-direction: column;
    grid-gap: 24px;
  }
}
</style>