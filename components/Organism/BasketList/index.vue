<template>
  <div class="basket-list flex-column gap-6">
    <MoleculeProduct v-for="item in 2" :key="item" text="Қысқаша сипаттамасы" link="10,000 ₸" variant="col">
      <AtomCounter />
      <v-icon>mdi-delete-outline</v-icon>
    </MoleculeProduct>
  </div>
</template>

<style lang="scss" scoped>
.basket-list {}
</style>