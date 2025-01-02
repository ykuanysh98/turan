<template>
  <div class="profile">
    <v-container class="flex-column items-center gap-10">
      <div class="profile__wrap">
        <AtomTitle title="Профиль" size="xs" block />
        <MoleculeTabs v-model="tab" class="mb-2" />

        <OrganismProfile v-if="tab === 1" />

        <OrganismOrders v-if="tab === 2" />
      </div>
      <BaseButton
        variant="secondary"
        size="xs"
        @click="logoutProfile"
        :block="isMobile"
      >
        <v-icon color="red" icon="mdi-logout" start> </v-icon>
        Выйти
      </BaseButton>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuth } from "~/composables/useAuth";
import { useMobile } from "~/composables/useMobile";
import { useRouter } from "vue-router";

const { logout } = useAuth();
const { isMobile } = useMobile();
const router = useRouter();

const definePageMeta = (meta: { layout: string; middleware: string }) => meta;
definePageMeta({
  layout: "default",
  middleware: "auth",
});

const tab = ref<any>(1);

const logoutProfile = function () {
  logout();
  router.push("/");
};
</script>

<style lang="scss" scoped>
.profile {
  width: 640px;
  margin: 0 auto 0;
  padding: 48px 0 96px 0;

  @media (max-width: 768px) {
    width: 100%;
  }

  &__wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    grid-gap: 24px;
  }
}
</style>
