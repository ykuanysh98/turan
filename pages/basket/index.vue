<template>
  <div class="basket">
    <v-container class="flex-column gap-10">
      <AtomTitle title="Корзина" />
      <div class="basket__wrap">
        <OrganismBasketList class="basket__list" />
        <MoleculeCheck>
          <BaseButton @click="$router.push('/checkout')" block>
            Оставить заявку
          </BaseButton>
        </MoleculeCheck>
      </div>
      <OrganismProductSimilar title="Вместе с этим покупают" />
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.basket {
  padding: 40px 0;

  &__wrap {
    display: flex;
    align-items: flex-start;
    grid-gap: 24px;
  }

  &__list {
    width: 100%;
    max-width: 640px;
  }
}
</style>