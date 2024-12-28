<template>
  <div>
    <v-icon icon="mdi-menu" @click="toggleDrawer"></v-icon>
    <v-navigation-drawer
      class="burger__body"
      :model-value="drawer"
      location="top"
      v-model="drawer"
    >
      <!-- Close button (X) in the top-right corner -->
      <template v-slot:prepend>
        <v-icon @click="closeDrawer" color="#717680" class="close-btn"
          >mdi-close</v-icon
        >
      </template>
      <v-container>
        <div class="h-[72px] flex-between">
          <AtomLogo></AtomLogo>
        </div>
      </v-container>
      <AtomDivider />
      <v-container>
        <MoleculeList class="pt-6" variant="secondary" :items="items" />
      </v-container>
      <AtomDivider />
      <template v-slot:append>
        <v-container>
          <MoleculeButtonGroup class="pt-6">
            <BaseButton block @click="$router.push('/auth/login')">
              Войти
            </BaseButton>
            <BaseButton
              block
              @click="$router.push('/auth/register')"
              variant="secondary"
            >
              Создать аккаунт
            </BaseButton>
          </MoleculeButtonGroup>
        </v-container>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
// import { VListItemContent } from 'vuetify/components';
import { ref } from "vue";

const drawer = ref(false);
const items = ref([
  { title: "Конструктор мебели" },
  { title: "Каталог" },
  { title: "Оставить заявку" },
  { title: "Контакты" },
]);

function toggleDrawer() {
  drawer.value = !drawer.value;
}

function closeDrawer() {
  drawer.value = false;
}

function logout() {
  console.log("Logout clicked");
}
</script>

<style lang="scss" scoped>
.burger {
  &__body {
    width: 100%;
    padding: 0 0 24px 0;
  }
}
.close-btn {
  position: absolute;
  top: 25px;
  right: 18px;
  z-index: 1;
}

.v-navigation-drawer__scrim {
  position: fixed !important;
}
</style>
