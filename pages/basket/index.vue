<template>
  <div class="basket">
    <v-container class="flex-column gap-10">
      <template v-if="!emptyShow">
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
      </template>

      <MoleculeEmpty
        v-else
        img="basket"
        title="Корзина пуста"
        text="Добавьте товары для оформления заказа"
      >
        <BaseButton @click="$router.push('/catalog')" block>
          К покупкам
        </BaseButton>
      </MoleculeEmpty>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const emptyShow = ref(true);
</script>

<style lang="scss" scoped>
.basket {
  padding: 40px 0;
  @media (max-width: 768px) {
    padding: 0;
  }

  &__wrap {
    display: flex;
    align-items: flex-start;
    grid-gap: 24px;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  &__list {
    width: 100%;
    max-width: 640px;
  }
}
</style>
