<template>
  <div class="order">
    <AtomChip :color="status">
      Доставляется
    </AtomChip>
    <AtomTitle title="Заказ №23451" subtitle="265 000 ₸" size="sm" class="order__title" />
    <AtomTitle subtitle="Доставим 25 ноября" size="sm" />
    <AtomTitle subtitle="Заказ от 22 ноября" size="sm" />

    <MoleculeButtonGroup class="h-[80px]">
      <img class="h-full" src="../../../public/Images/image.png" alt="">
      <img class="h-full" src="../../../public/Images/image.png" alt="">
      <img class="h-full" src="../../../public/Images/image.png" alt="">
    </MoleculeButtonGroup>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const status = computed(() => {

  let color = 'deep-purple-accent-4';

  return color
})
</script>

<style lang="scss" scoped>
.order {
  width: 100%;
  padding: 24px;
  border-radius: 16px;
  background-color: #fff;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  grid-gap: 16px;

  &__title {
    grid-gap: 4px;

    &:deep(h3) {
      font-size: 18px;
      font-weight: 600;
      line-height: 28px;
    }
  }
}
</style>