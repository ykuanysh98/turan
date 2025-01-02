<template>
  <div class="header">
    <v-container class="h-full flex-between gap-10">
      <AtomLogo />

      <div class="flex-between gap-8 mobile-not">
        <NuxtLink to="/"> <AtomText> Конструктор </AtomText> </NuxtLink>
        <NuxtLink to="/catalog"> <AtomText> Каталог </AtomText> </NuxtLink>
        <NuxtLink to="/"> <AtomText> Оставить заявку </AtomText> </NuxtLink>
      </div>

      <OrganismSearch class="w-full max-w-[400px] mobile-not" />

      <div class="flex-between gap-4">
        <OrganismSearchMobile class="mobile-only" />
        <OrganismHeaderRight />
        <OrganismBurgerMenu class="mobile-only" />
      </div>
    </v-container>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.header {
  height: 80px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 50;
  background-color: #fff;

  @media (max-width: 768px) {
    height: 72px;
  }
}
</style>
