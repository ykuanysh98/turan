<template>
  <v-container class="flex-column gap-[80px]">
    <div class="product">
      <div class="product__left">
        <AtomSlider :items="[1, 2, 3, 4, 5]" :count="0.5"> </AtomSlider>
        <AtomDescription />
      </div>
      <div class="product__right">
        <MoleculeBooking />
      </div>
    </div>
    <OrganismProductSimilar title="Рекомендуем вам" />
    <OrganismProductSimilar title="Вместе с этим покупают" />
  </v-container>
</template>

<style lang="scss" scoped>
.product {
  padding: 40px 0;
  display: flex;
  align-items: flex-start;
  grid-gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  &__left {
    width: 100%;
    max-width: 640px;
    display: flex;
    flex-direction: column;
    grid-gap: 80px;
  }
  &__left {
    width: 100%;
  }
}
</style>
