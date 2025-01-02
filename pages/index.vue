<template>
  <div>
    <v-container class="flex-column gap-[80px] my-[96px]">
      <OrganismBanner
        title="Создайте мебель своей мечты"
        subtitle="Выбирайте из готовых решений в каталоге или создавайте уникальные модели для дома и офиса"
      />
      <OrganismProductList title="Каталог" />
    </v-container>
    <OrganismReservation />
    <v-container class="pt-0">
      <OrganismSteps />
    </v-container>
    <OrganismFAQ />
  </div>
</template>

<script setup lang="ts">
const definePageMeta = (meta: { layout: string }) => meta;
definePageMeta({
  layout: "default",
});
</script>
