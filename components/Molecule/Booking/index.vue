<template>
  <div class="booking">
    <AtomTitle title="Шкаф 3-дверный, белый ЛДСП, 180см-260см-60см" main size="xs" />
    <AtomTitle title="132 000 ₸" subtitle="Доставляем от 4 до 7 дней по всему Казахстану" discount="150 000 ₸"
      variant="different" size="xs" />

    <AtomChip class="h-[30px]" color="deep-purple-accent-4">
      Вы можете настроить под себя этот товар
      <AtomChip class="ml-2 bg-white" variant="outlined" color="primary" append-icon="mdi-arrow-right">
        Создать уникальный дизайн
      </AtomChip>
    </AtomChip>

    <MoleculeButtonGroup>
      <BaseButton>Добавить в корзину</BaseButton>
      <BaseButton size="lg">Добавить в корзину</BaseButton>
    </MoleculeButtonGroup>
  </div>
</template>

<style lang="scss" scoped>
.booking {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  grid-gap: 24px;
}
</style>