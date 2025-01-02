<template>
  <div class="booking">
    <AtomTitle
      title="Шкаф 3-дверный, белый ЛДСП, 180см-260см-60см"
      main
      size="xs"
    />
    <div class="booking__price">
      <AtomText label="150 000 ₸" variant="different" size="xll">
        132 000 ₸
      </AtomText>
      <AtomText size="xs">
        Доставляем от 4 до 7 дней по всему Казахстану
      </AtomText>
    </div>

    <AtomChip class="h-[30px]" color="deep-purple-accent-4">
      Вы можете настроить под себя этот товар
      <AtomChip
        class="ml-2 bg-white"
        variant="outlined"
        color="primary"
        append-icon="mdi-arrow-right"
      >
        Создать уникальный дизайн
      </AtomChip>
    </AtomChip>

    <MoleculeButtonGroup>
      <AtomCounter />
      <BaseButton size="lg" @click="submit">Добавить в корзину</BaseButton>
    </MoleculeButtonGroup>
  </div>
</template>

<script lang="ts" setup>
import { useBasketStore } from "~/stores/basket";
const order = useBasketStore();

const submit = function () {
  order.add({ basket: 1 });
};
</script>

<style lang="scss" scoped>
.booking {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  grid-gap: 24px;

  &__price {
    display: flex;
    flex-direction: column;
    grid-gap: 4px;
  }
}
</style>
