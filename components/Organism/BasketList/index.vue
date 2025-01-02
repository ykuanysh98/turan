<template>
  <div class="basket-list flex-column gap-6">
    <MoleculeProduct
      v-for="item in basketList"
      :key="item"
      :item="item"
      variant="col"
    >
      <AtomCounter />
      <AtomIcon icon="trash" />
    </MoleculeProduct>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted } from "vue";
import { useBasketStore } from "~/stores/basket";
const order = useBasketStore();

const basketList = computed(() => {
  let list = [];
  for (let i = 1; i < 5; i++) {
    list.push({
      id: i,
      title: "Өнім атауы",
      price: "20 000 т",
      text: "Небольшое описание про товар или категория",
    });
  }
  if (order.basketList) {
    list = order.basketList;
  }
  return list;
});
onMounted(() => {
  order.fetch();
});
</script>

<style lang="scss" scoped>
.basket-list {
}
</style>
